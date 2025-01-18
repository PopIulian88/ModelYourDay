import { View } from "react-native";
import { ChipModel, TextType } from "../../../models";
import { pageStyle } from "./pageStyle";
import { Text } from "../updatedComponents";

const Chip = (props: ChipModel) => {
  return (
    <View style={[pageStyle.container, props.styles]}>
      <Text
        type={TextType.heading2SM}
        style={[pageStyle.text, props.textStyle]}
      >
        {props.text}
      </Text>
    </View>
  );
};

export default Chip;
