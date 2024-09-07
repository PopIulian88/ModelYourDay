import { Text as RnText } from "react-native";
import { TextModel, TextType } from "../../../../models";
import { style } from "../../../../styles";

const Text = (props: TextModel) => {
  const getStyleByType = () => {
    switch (props.type) {
      case TextType.headingXL:
        return style.text.headingXL;
      case TextType.headingL:
        return style.text.headingL;
      case TextType.headingMD:
        return style.text.headingMD;
      case TextType.headingSM:
        return style.text.headingSM;
      case TextType.heading2SM:
        return style.text.heading2SM;
      case TextType.heading3SM:
        return style.text.heading3SM;
      case TextType.bodyXL:
        return style.text.bodyXL;
      case TextType.bodyL:
        return style.text.bodyL;
      case TextType.bodyMD:
        return style.text.bodyMD;
      case TextType.body2MD:
        return style.text.body2MD;
      case TextType.body3MD:
        return style.text.body3MD;
      case TextType.bodySM:
        return style.text.bodySM;
      case TextType.body2SM:
        return style.text.body2SM;
      case TextType.body3SM:
        return style.text.body3SM;
      default:
        return style.text.bodyL;
    }
  };
  return (
    <RnText
      numberOfLines={props.numberOfLines}
      style={[getStyleByType(), props.style]}
      // Could interfere to the fonts
      allowFontScaling={false}
      ellipsizeMode="middle"
    >
      {props.children}
    </RnText>
  );
};
export default Text;
