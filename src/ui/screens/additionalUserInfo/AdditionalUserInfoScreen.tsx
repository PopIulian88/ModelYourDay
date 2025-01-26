import { ScrollView, View } from "react-native";
import { pageStyle } from "./pageStyle";
import { Button, Text, TextInput } from "../../components";
import { ButtonType, TextType } from "../../../models";
import { IconAssets, Lottie, StringsRepo } from "../../../resources";
import { Loading } from "../loading";
import { useSelector } from "react-redux";
import { IStore, useAppDispatch, userActions } from "../../../redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import LottieView from "lottie-react-native";
import { useState } from "react";

const AdditionalUserInfoScreen = () => {
  const { top, bottom } = useSafeAreaInsets();

  const { isModelLoading } = useSelector((state: IStore) => state.modelReducer);

  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const dispatch = useAppDispatch();

  const onConfirmPress = async () => {
    //Update the user data username and age
    await dispatch(userActions.updateNameAndAgeUser(username, parseInt(age)));
  };

  const isButtonDisabled = () => {
    return (
      username === "" ||
      age === "" ||
      parseInt(age) <= 0 ||
      isNaN(parseInt(age))
    );
  };

  return !isModelLoading ? (
    <View style={pageStyle.container}>
      <ScrollView
        style={pageStyle.scrollContainer}
        contentContainerStyle={[
          pageStyle.scrollContentContainer,
          { paddingTop: top, paddingBottom: Math.max(bottom + 90, 100) },
        ]}
      >
        <LottieView
          source={Lottie.lit}
          style={pageStyle.lottie}
          autoPlay
          loop
        />
        <Text type={TextType.headingXL} style={pageStyle.title}>
          {StringsRepo.howCanWeCallYou}
        </Text>

        <View style={pageStyle.textInputContainer}>
          <TextInput
            placeholder={StringsRepo.usernamePlaceholder}
            value={username}
            onChangeText={(response) => setUsername(response)}
            icon={IconAssets.circleUser}
          />

          <TextInput
            placeholder={StringsRepo.agePlaceholder}
            value={age.toString()}
            onChangeText={(response) => setAge(response)}
            icon={IconAssets.starEmpty}
            keyboardType={"numeric"}
          />
        </View>
      </ScrollView>
      <View
        style={[
          {
            position: "absolute",
            bottom: 0,
            width: "100%",
            alignItems: "center",
          },
          { paddingBottom: Math.max(bottom + 6, 16) },
        ]}
      >
        <Button
          title={StringsRepo.confirm}
          type={ButtonType.PRIMARY}
          isDisabled={isButtonDisabled()}
          onPress={onConfirmPress}
        />
      </View>
    </View>
  ) : (
    <Loading />
  );
};

export default AdditionalUserInfoScreen;
