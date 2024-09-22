import { ChatTextModel, TextType } from "../../../models";
import { View } from "react-native";
import { Text } from "../updatedComponents";
import { pageStyle } from "./pageStyle";
import { style } from "../../../styles";

const ChatText = (props: ChatTextModel) => {
  return (
    <View
      style={[
        pageStyle.container,
        props.isSender
          ? {
              backgroundColor: style.color.goldDrop,
              borderBottomRightRadius: 0,
            }
          : {
              backgroundColor: style.color.white,
              borderBottomLeftRadius: 0,
            },
      ]}
    >
      <Text
        type={TextType.bodyL}
        style={[
          pageStyle.text,
          {
            color: props.isSender ? style.color.white : style.color.black,
          },
        ]}
      >
        {props.text}
      </Text>
    </View>
  );
};
export default ChatText;
