import { Button, View } from "react-native";
import { Text } from "../../components";
import { rootActions, useAppDispatch } from "../../../redux";
import { handleRequest } from "../../../backend";

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  console.log("DAME: ", process.env.AI_KEY);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title={"Logout"}
        onPress={() => dispatch(rootActions.setIsLoggedIn(false))}
      />
      <Button title={"useAI"} onPress={() => handleRequest("Hello")} />
    </View>
  );
};
export default HomeScreen;
