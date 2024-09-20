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
import { useAppDispatch, userActions } from "../../../redux";
import { Fragment, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { ButtonType, TextType } from "../../../models";

const AuthScreen = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const dispatch = useAppDispatch();

  const { bottom } = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  const handleLogin = () => {
    console.log("Login in progress...");
    dispatch(userActions.login(email, password));
  };
  const handleRegister = () => {
    console.log("Register in progress...");
    dispatch(
      userActions.register(
        {
          email: email,
          username: username,
          age: parseInt(age),
        },
        password,
      ),
    );
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

  return (
    <Fragment>
      <SafeAreaView
        style={{ flex: 0, backgroundColor: style.color.sunshade }}
      />
      <ImageBackground
        source={Images.background}
        style={[
          pageStyle.container,
          { paddingBottom: Math.max(bottom + 6, 16) },
        ]}
        resizeMode={"cover"}
      >
        <LottieView
          style={[pageStyle.lottie, { height: height * 0.23 }]}
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
              />
            )}
            <TextInput
              placeholder={StringsRepo.emailPlaceholder}
              value={email}
              onChangeText={(response) => setEmail(response)}
              icon={IconAssets.mail}
              autoCapitalize={"none"}
            />
            <TextInput
              placeholder={StringsRepo.passwordPlaceholder}
              value={password}
              onChangeText={(response) => setPassword(response)}
              icon={IconAssets.lock}
              autoCapitalize={"none"}
              secureTextEntry={true}
            />
            {!isLogin && (
              <TextInput
                placeholder={StringsRepo.agePlaceholder}
                value={age.toString()}
                onChangeText={(response) => setAge(response)}
                icon={IconAssets.starEmpty}
                keyboardType={"numeric"}
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
  );
};
export default AuthScreen;
