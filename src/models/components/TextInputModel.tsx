export enum TextInputType {
  DEFAULT = "default",
  SPECIAL = "special",
}

export type TextInputModel = {
  type?: TextInputType;
  placeholder?: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "numeric" | "default";
  autoCapitalize?: "none";
  icon?: string;
  onFocus?: (b: boolean) => void;
};
