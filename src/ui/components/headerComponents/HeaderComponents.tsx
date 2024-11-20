import { Text } from "../updatedComponents";
import { TextType } from "../../../models";
import { Lottie } from "../../../resources";
import { StyleProp, TouchableOpacity, View, ViewStyle } from "react-native";
import LottieView from "lottie-react-native";
import { pageStyle } from "./pageStyle";

export const HeaderComponents = ({
  text,
  onPressReload,
  style,
}: {
  text: string;
  onPressReload?: () => void;
  style?: StyleProp<ViewStyle>;
}) => {
  return (
    <View style={[pageStyle.container, style]}>
      <Text type={TextType.headingMD}>{text}</Text>
      {onPressReload && (
        <TouchableOpacity
          hitSlop={10}
          onPress={onPressReload}
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
