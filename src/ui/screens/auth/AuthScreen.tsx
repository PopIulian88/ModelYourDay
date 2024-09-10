import { Button, TextInput, View } from "react-native";
import { Text } from "../../components";
import { TextType } from "../../../models";
import { style } from "../../../styles";
import { Lottie } from "../../../resources";
import LottieView from "lottie-react-native";
import { pageStyle } from "./pageStyle";
import { userActions, IStore, useAppDispatch } from "../../../redux";
import { useSelector } from "react-redux";
import { useState } from "react";

const AuthScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useAppDispatch();

  const { isLoading } = useSelector((state: IStore) => state.userReducer);

  return (
    <View style={pageStyle.container}>
      <LottieView
        style={{ height: 100, width: 100 }}
        source={Lottie.lit}
        autoPlay
        loop
        renderMode={"SOFTWARE"}
      />
      <Text type={TextType.headingL} style={{ color: style.color.brown }}>
        Auth Screen
      </Text>
      <TextInput
        value={email}
        onChangeText={(r) => setEmail(r)}
        autoCapitalize="none"
        placeholder={"Email"}
        style={{
          width: "70%",
          padding: 10,
          borderColor: style.color.gray,
          borderWidth: 1,
        }}
      />
      <TextInput
        value={password}
        onChangeText={(r) => setPassword(r)}
        placeholder={"Password"}
        style={{
          width: "70%",
          padding: 10,
          borderColor: style.color.gray,
          borderWidth: 1,
        }}
      />
      <Button
        title={"Login"}
        onPress={() => dispatch(userActions.login(email, password))}
      />
      <Button
        title={"Register"}
        onPress={() => dispatch(userActions.register(email, password))}
      />
    </View>
  );
};
export default AuthScreen;
