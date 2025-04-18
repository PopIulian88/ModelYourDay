import { Text } from "../updatedComponents";
import { RegenDataModel, TextType } from "../../../models";
import { Lottie, StringsRepo } from "../../../resources";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import LottieView from "lottie-react-native";
import { pageStyle } from "./pageStyle";
import {
  IStore,
  modelActions,
  rootActions,
  useAppDispatch,
} from "../../../redux";
import { useSelector } from "react-redux";
import { style as appStyle } from "../../../styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { Routes } from "../../navigation";

export const HeaderComponents = ({
  text,
  dataToReload,
  showReload,
  showAllButton,
  style,
}: {
  text: string;
  dataToReload: RegenDataModel;
  showReload: boolean;
  showAllButton?: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  const dispatch = useAppDispatch();
  const { model } = useSelector((state: IStore) => state.modelReducer);
  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();

  const handleReload = async () => {
    dispatch(
      rootActions.showModal({
        title: StringsRepo.wannaReload,
        lottie: Lottie.aiBot,
        buttonTitle: StringsRepo.noItWasMistake,
        buttonAction: () => {
          dispatch(rootActions.hideModal());
        },
        secondaryButtonTitle: StringsRepo.yesPlease,
        secondaryButtonAction: async () => {
          dispatch(rootActions.hideModal());

          await dispatch(modelActions.regenDataModel(model, dataToReload));
        },
      }),
    );
  };

  const handleShowAllPress = () => {
    switch (dataToReload) {
      case RegenDataModel.FOOD:
        // @ts-ignore
        navigate(Routes.modelFood);
        break;
      case RegenDataModel.GYM:
        // @ts-ignore
        navigate(Routes.modelGym);
        break;
    }
  };

  return (
    <View style={[pageStyle.container, style]}>
      <View style={pageStyle.leftContainer}>
        <Text type={TextType.headingMD}>{text}</Text>
        {showAllButton && (
          <TouchableOpacity style={{ top: 5 }} onPress={handleShowAllPress}>
            <Text
              type={TextType.body2SM}
              style={{ color: appStyle.color.sunshade }}
            >
              Show all
            </Text>
          </TouchableOpacity>
        )}
      </View>
      {showReload && (
        <TouchableOpacity
          hitSlop={10}
          onPress={handleReload}
          style={pageStyle.reload}
        >
          <LottieView
            source={Lottie.reload}
            // loop
            // autoPlay
            style={pageStyle.reloadLottie}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
