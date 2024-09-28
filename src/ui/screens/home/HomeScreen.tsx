import { View } from "react-native";
import { pageStyle } from "./pageStyle";
import { useSelector } from "react-redux";
import {
  IStore,
  rootActions,
  useAppDispatch,
  userActions,
} from "../../../redux";
import { ButtonType, ModalModel } from "../../../models";
import { Lottie } from "../../../resources";
import { Button, Text } from "../../components";

const HomeScreen = () => {
  const { email } = useSelector((state: IStore) => state.userReducer);
  const dispatch = useAppDispatch();

  return (
    <View style={pageStyle.container}>
      <Text>Home Screen</Text>
      <Button
        type={ButtonType.PRIMARY}
        title={"Logout"}
        onPress={() => dispatch(userActions.logout())}
      />
      {/*TODO: This is mocked data*/}
      <Button
        type={ButtonType.SPECIAL}
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
