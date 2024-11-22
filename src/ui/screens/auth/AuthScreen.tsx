import {
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { Button, Text, TextInput } from "../../components";
import { style } from "../../../styles";
import { IconAssets, Images, Lottie, StringsRepo } from "../../../resources";
import LottieView from "lottie-react-native";
import { pageStyle } from "./pageStyle";
import {
  IStore,
  rootActions,
  useAppDispatch,
  userActions,
} from "../../../redux";
import { Fragment, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  AuthVerificationModel,
  ButtonType,
  TextType,
  UserType,
} from "../../../models";
import { NavigationProp, useNavigation } from "@react-navigation/native";
// This import is like this to fix the index loop
import { Routes } from "../../navigation/constats";
import { AuthNavigatorProps } from "../../navigation";
import { useSelector } from "react-redux";
import { Loading } from "../loading";
import { helper } from "../../../helper";

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [myLoading, setMyLoading] = useState(false);

  const [isFocused, setIsFocused] = useState(false);
  const dispatch = useAppDispatch();
  const { isLoading } = useSelector((state: IStore) => state.rootReducer);

  const { navigate } = useNavigation<NavigationProp<AuthNavigatorProps>>();
  const { bottom } = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  const handleLogin = () => {
    dispatch(userActions.login(email, password));
  };
  const handleRegister = async () => {
    await dispatch(rootActions.getUsers()).then(async (response) => {
      // Verify if users exists
      if (response.payload === undefined) {
        console.log("ERROR: Users not fetched");
        dispatch(
          rootActions.showModal({
            error: true,
            title: StringsRepo.somethingWentWrong,
          }),
        );
        return;
      }
      //Verify if the user already exists
      if (!response.payload.find((user: UserType) => user.email === email)) {
        //If the user doesn't exist, navigate to the verification screen
        const generatedCode = helper.generateCode();

        setMyLoading(true);

        await helper
          .sendVerificationMail({
            email: email,
            code: generatedCode,
          })
          .then(() => setMyLoading(false))
          .catch(() => setMyLoading(false));
        // @ts-ignore
        navigate(Routes.authVerification, {
          email: email ?? "",
          username: username ?? "",
          age: parseInt(age) ?? 0,
          password: password ?? "",
          code: generatedCode ?? "0000",
        } as AuthVerificationModel);
      } else {
        //If the user already exists, show an error modal
        dispatch(
          rootActions.showModal({
            error: true,
            title: StringsRepo.userAlreadyExists,
          }),
        );
      }
    });
  };

  const isButtonDisabled = () => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    if (isLogin) {
      return !regEmail.test(email) || password.length < 6;
    } else {
      return (
        !regEmail.test(email) ||
        password.length < 6 ||
        username === "" ||
        age === "" ||
        parseInt(age) <= 0 ||
        isNaN(parseInt(age))
      );
    }
  };

  return !isLoading && !myLoading ? (
    <Fragment>
      <SafeAreaView style={pageStyle.safeArea} />
      <ImageBackground
        source={Images.background}
        style={[
          pageStyle.container,
          { paddingBottom: Math.max(bottom + 6, 16) },
        ]}
        resizeMode={"stretch"}
      >
        <LottieView
          style={[
            pageStyle.lottie,
            { height: isFocused ? height * 0.1 : height * 0.23 },
          ]}
          source={Lottie.createAccount}
          autoPlay
          loop
          renderMode={"SOFTWARE"}
        />

        <View style={pageStyle.middleContainer}>
          <View style={pageStyle.authStatusContainer}>
            <TouchableOpacity onPress={() => setIsLogin(false)}>
              <Text
                type={TextType.headingXL}
                style={{
                  color: isLogin ? style.color.alto : style.color.codGray,
                }}
              >
                {StringsRepo.register}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setIsLogin(true)}>
              <Text
                type={TextType.headingXL}
                style={{
                  color: isLogin ? style.color.codGray : style.color.alto,
                }}
              >
                {StringsRepo.login}
              </Text>
            </TouchableOpacity>
          </View>
          <View style={pageStyle.textInputContainer}>
            {!isLogin && (
              <TextInput
                placeholder={StringsRepo.usernamePlaceholder}
                value={username}
                onChangeText={(response) => setUsername(response)}
                icon={IconAssets.circleUser}
                onFocus={(response) => setIsFocused(response)}
              />
            )}
            <TextInput
              placeholder={StringsRepo.emailPlaceholder}
              value={email}
              onChangeText={(response) => setEmail(response)}
              icon={IconAssets.mail}
              autoCapitalize={"none"}
              onFocus={(response) => setIsFocused(response)}
            />
            <TextInput
              placeholder={StringsRepo.passwordPlaceholder}
              value={password}
              onChangeText={(response) => setPassword(response)}
              icon={IconAssets.lock}
              autoCapitalize={"none"}
              secureTextEntry={true}
              onFocus={(response) => setIsFocused(response)}
            />
            {!isLogin && (
              <TextInput
                placeholder={StringsRepo.agePlaceholder}
                value={age.toString()}
                onChangeText={(response) => setAge(response)}
                icon={IconAssets.starEmpty}
                keyboardType={"numeric"}
                onFocus={(response) => setIsFocused(response)}
              />
            )}
          </View>
        </View>

        <Button
          type={ButtonType.PRIMARY}
          title={isLogin ? StringsRepo.login : StringsRepo.register}
          isDisabled={isButtonDisabled()}
          onPress={isLogin ? handleLogin : handleRegister}
        />
      </ImageBackground>
    </Fragment>
  ) : (
    <Loading />
  );
};
export default AuthScreen;
