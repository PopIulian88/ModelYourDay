import { View } from "react-native";
import { style } from "../../../styles";
import { IconModel } from "../../../models";
import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import iconSet from "../../../resources/icons/selection.json";

const Icon = (props: IconModel) => {
  const Icon = createIconSetFromIcoMoon(iconSet, "IconsFont", "IconsFont.ttf");

  return (
    <View style={props.style}>
      <Icon
        name={props.name}
        size={props.size || 20}
        color={props.color || style.color.black}
      />
    </View>
  );
};
export default Icon;
