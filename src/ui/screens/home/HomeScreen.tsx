import { Button, View } from "react-native";
import { pageStyle } from "./pageStyle";
import { useSelector } from "react-redux";
import {
  IStore,
  rootActions,
  useAppDispatch,
  userActions,
} from "../../../redux";
import { ModalModel, MotivationalCardType } from "../../../models";
import { Lottie } from "../../../resources";
import { MotivationalCard, Text } from "../../components";

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
      <MotivationalCard
        type={MotivationalCardType.DEFAULT}
        // cardNumber={10}
        header={"Julius Caesar"}
        list={[
          "Facem flotari",
          "Baga mare ds a dsa dsa  wdq d q dwq wq",
          "Dame mare text",
          "dame",
        ]}
        text={"What is Dwayne Johnson workout routine?"}
        lottie={Lottie.sport}
      />
    </View>
  );
};
export default HomeScreen;
