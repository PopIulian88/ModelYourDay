import {
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from "react-native";
import { Icon } from "../updatedComponents";
import { IconAssets } from "../../../resources";
import { pageStyle } from "./pageStyle";
import { useNavigation } from "@react-navigation/native";
import { style } from "../../../styles";

const BackButton = ({ styles }: { styles: ViewStyle }) => {
  const { goBack } = useNavigation();
  return (
    <TouchableOpacity
      style={[pageStyle.container, styles]}
      onPress={() => goBack()}
      hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
    >
      <Icon
        name={IconAssets.arrowBack}
        size={16}
        color={style.color.goldDrop}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
