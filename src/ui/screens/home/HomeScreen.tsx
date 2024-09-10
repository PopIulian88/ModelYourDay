import { Button, View } from "react-native";
import { Text } from "../../components";
import { FIREBASE_AUTH } from "../../../backend";
import { pageStyle } from "./pageStyle";

const HomeScreen = () => {
  return (
    <View style={pageStyle.container}>
      <Text>Home Screen</Text>
      <Button title={"Logout"} onPress={() => FIREBASE_AUTH.signOut()} />
    </View>
  );
};
export default HomeScreen;
