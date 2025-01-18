import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ChipModel = {
  text: string;
  styles?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};
