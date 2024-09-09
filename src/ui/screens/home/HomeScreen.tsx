import { Button, View } from "react-native";
import { Text } from "../../components";
import { rootActions, useAppDispatch } from "../../../redux";
import { FIREBASE_AUTH } from "../../../backend";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button title={"Logout"} onPress={() => FIREBASE_AUTH.signOut()} />
    </View>
  );
};
export default HomeScreen;
