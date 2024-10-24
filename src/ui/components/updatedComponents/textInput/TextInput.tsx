import { TextInput as RnTextInput, TouchableOpacity, View } from "react-native";
import { TextInputModel, TextInputType } from "../../../../models";
import { useState } from "react";
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
    <View
      style={
        props.type === TextInputType.SPECIAL
          ? pageStyle.specialContainer
          : pageStyle.container
      }
    >
      {props.type !== TextInputType.SPECIAL && (
        <Icon name={props.icon ?? IconAssets.eye} color={style.color.tundora} />
      )}

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
        {props.type !== TextInputType.SPECIAL && (
          <View style={pageStyle.line} />
        )}
      </View>
    </View>
  );
};

export default TextInput;
