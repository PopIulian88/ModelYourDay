import { TouchableOpacity } from "react-native";
import { style } from "../../../../styles";
import { ButtonModel, ButtonType, TextType } from "../../../../models";
import { Text } from "../text";
import { pageStyle } from "./pageStyle";

const Button = (props: ButtonModel) => {
  const buttonColor = () => {
    return props.type === ButtonType.PRIMARY && !props.isDisabled
      ? style.color.sunshade
      : props.type === ButtonType.SPECIAL
        ? style.color.white
        : style.color.tundora;
  };
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.isDisabled}
      style={[
        pageStyle.container,
        {
          backgroundColor: buttonColor(),
        },
        props.type === ButtonType.SPECIAL && pageStyle.specialContainer,
      ]}
    >
      <Text
        type={TextType.bodyXL}
        style={[
          pageStyle.text,
          props.type === ButtonType.SPECIAL && { color: style.color.sunshade },
        ]}
      >
        {props.title}
      </Text>
    </TouchableOpacity>
  );
};
export default Button;
