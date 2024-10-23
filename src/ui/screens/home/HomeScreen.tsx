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
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { MainRoutes } from "../../navigation/constats/MainRoutes";

const HomeScreen = () => {
  const { email } = useSelector((state: IStore) => state.userReducer);
  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();

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
        title={"Secret door"}
        onPress={() => {
          // TODO: Remove before creating this screen
          // @ts-ignore
          navigate(MainRoutes.chooseFirstModel);
        }}
      />
      <Text>{`Email: ${email}`}</Text>
    </View>
  );
};
export default HomeScreen;
