import { Button, View } from "react-native";
import { Text } from "../../components";
import { TextType } from "../../../models";
import { style } from "../../../styles";
import { Lottie } from "../../../resources";
import LottieView from "lottie-react-native";
import { pageStyle } from "./pageStyle";
import { FIREBASE_AUTH } from "../../../backend";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

const AuthScreen = () => {
  const signUp = async () => {
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        "test@test.test",
        "123456",
      );
    } catch (e) {
      console.error(e);
    }
  };

  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        "test@test.test",
        "123456",
      );
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <View style={pageStyle.container}>
      <Text type={TextType.headingL} style={{ color: style.color.brown }}>
        Auth Screen
      </Text>
      <Button title={"Register"} onPress={signUp} />
      <LottieView
        style={{ height: 100, width: 100 }}
        source={Lottie.lit}
        autoPlay
        loop
        renderMode={"SOFTWARE"}
      />
      <Button title={"Login"} onPress={signIn} />
    </View>
  );
};
export default AuthScreen;
