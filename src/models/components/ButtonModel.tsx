import { TouchableOpacityProps } from "react-native";

export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
  SPECIAL = "special",
}

export type ButtonModel = {
  title: string;
  type: ButtonType;
  onPress: () => void;
  isDisabled?: boolean;
  style?: TouchableOpacityProps["style"];
};
