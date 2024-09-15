import { Button, View } from "react-native";
import { Text } from "../../components";
import { pageStyle } from "./pageStyle";
import { useSelector } from "react-redux";
import { IStore, useAppDispatch, userActions } from "../../../redux";

const HomeScreen = () => {
  const { email } = useSelector((state: IStore) => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <View style={pageStyle.container}>
      <Text>Home Screen</Text>
      <Button title={"Logout"} onPress={() => dispatch(userActions.logout())} />
      <Button
        title={"Get email"}
        onPress={() => {
          console.log("Get email:", email);
        }}
      />
      <Text>{`Email: ${email}`}</Text>
    </View>
  );
};
export default HomeScreen;
