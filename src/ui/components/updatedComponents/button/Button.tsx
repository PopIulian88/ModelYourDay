import { TouchableOpacity } from "react-native";
import { style } from "../../../../styles";
import { ButtonModel, ButtonType, TextType } from "../../../../models";
import { Text } from "../text";
import { pageStyle } from "./pageStyle";

const Button = (props: ButtonModel) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.isDisabled}
      style={[
        pageStyle.container,
        {
          backgroundColor:
            props.type === ButtonType.PRIMARY && !props.isDisabled
              ? style.color.sunshade
              : style.color.tundora,
        },
      ]}
    >
      <Text type={TextType.bodyXL} style={pageStyle.text}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
