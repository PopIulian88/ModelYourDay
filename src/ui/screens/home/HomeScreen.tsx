import { Button, View } from "react-native";
import { Text } from "../../components";
import { rootActions, useAppDispatch } from "../../../redux";

const HomeScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home Screen</Text>
      <Button
        title={"Logout"}
        onPress={() => dispatch(rootActions.setIsLoggedIn(false))}
      />
    </View>
  );
};
export default HomeScreen;
