export enum ButtonType {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

export type ButtonModel = {
  title: string;
  type: ButtonType;
  onPress: () => void;
  isDisabled?: boolean;
};
