import { TouchableOpacity, View } from "react-native";
import { TextInputModel } from "../../../../models";
import { useState } from "react";
import { TextInput as RnTextInput } from "react-native";
import { pageStyle } from "./pageStyle";
import { Icon } from "../icon";
import { style } from "../../../../styles";
import { IconAssets } from "../../../../resources";

const TextInput = (props: TextInputModel) => {
  const [value, setValue] = useState(props.value ?? "");
  const [showPassword, setShowPassword] = useState(false);

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
        <View style={pageStyle.inputContainer}>
          <RnTextInput
            placeholder={props.placeholder}
            value={value}
            onChangeText={handleTextChange}
            style={pageStyle.textInput}
            autoCapitalize={props.autoCapitalize}
            keyboardType={props.keyboardType}
            secureTextEntry={props.secureTextEntry && !showPassword}
            returnKeyType={"done"}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
          />
          {props.secureTextEntry && (
            <TouchableOpacity
              hitSlop={20}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Icon
                name={showPassword ? IconAssets.eye : IconAssets.eyeBlocked}
                color={style.color.tundora}
                size={20}
              />
            </TouchableOpacity>
          )}
        </View>
        <View style={pageStyle.line} />
      </View>
    </View>
  );
};

export default TextInput;
