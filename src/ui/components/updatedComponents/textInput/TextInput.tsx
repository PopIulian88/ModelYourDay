import { View } from "react-native";
import { TextInputModel } from "../../../../models";
import { useState } from "react";
import { TextInput as RnTextInput } from "react-native";
import { pageStyle } from "./pageStyle";
import { Icon } from "../icon";
import { style } from "../../../../styles";

const TextInput = (props: TextInputModel) => {
  const [value, setValue] = useState(props.value ?? "");

  const handleTextChange = (text: string) => {
    setValue(text);
    props.onChangeText(text);
  };

  const handleOnFocus = () => {
    if (props.onFocus) {
      props.onFocus(true);
    }
  };
  const handleOnBlur = () => {
    if (props.onFocus) {
      props.onFocus(false);
    }
  };

  return (
    <View style={pageStyle.container}>
      <Icon name={props.icon} color={style.color.tundora} />
      <View style={pageStyle.textInputContainer}>
        <RnTextInput
          placeholder={props.placeholder}
          value={value}
          onChangeText={handleTextChange}
          style={pageStyle.textInput}
          autoCapitalize={props.autoCapitalize}
          keyboardType={props.keyboardType}
          secureTextEntry={props.secureTextEntry}
          returnKeyType={"done"}
          onFocus={handleOnFocus}
          onBlur={handleOnBlur}
        />
        <View style={pageStyle.line} />
      </View>
    </View>
  );
};

export default TextInput;
