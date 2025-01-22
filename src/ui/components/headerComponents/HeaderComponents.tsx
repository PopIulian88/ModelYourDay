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

export const HeaderComponents = ({
  text,
  dataToReload,
  showReload,
  style,
}: {
  text: string;
  dataToReload: RegenDataModel;
  showReload: boolean;
  style?: StyleProp<ViewStyle>;
}) => {
  const dispatch = useAppDispatch();
  const { model } = useSelector((state: IStore) => state.modelReducer);

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

  return (
    <View style={[pageStyle.container, style]}>
      <Text type={TextType.headingMD}>{text}</Text>
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
