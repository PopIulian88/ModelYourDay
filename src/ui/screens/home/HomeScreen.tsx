import { Button, View } from "react-native";
import { Text } from "../../components";
import { pageStyle } from "./pageStyle";
import { useSelector } from "react-redux";
import {
  IStore,
  rootActions,
  useAppDispatch,
  userActions,
} from "../../../redux";
import { ModalModel } from "../../../models";
import { Lottie } from "../../../resources";

const HomeScreen = () => {
  const { email } = useSelector((state: IStore) => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <View style={pageStyle.container}>
      <Text>Home Screen</Text>
      <Button title={"Logout"} onPress={() => dispatch(userActions.logout())} />
      {/*TODO: This is mocked data*/}
      <Button
        title={"Open Modal"}
        onPress={() => {
          dispatch(
            rootActions.showModal({
              error: true,
              lottie: Lottie.influencer,
              title: "Are you sure you want to change your Model?",
              buttonTitle: "Primary Button",
              buttonAction: () => {
                console.log("Button Action");
              },
              secondaryButtonTitle: "Secondary Button",
              secondaryButtonAction: () => {
                console.log("Secondary Button Action");
              },
            } as ModalModel),
          );
        }}
      />
      <Text>{`Email: ${email}`}</Text>
    </View>
  );
};
export default HomeScreen;
