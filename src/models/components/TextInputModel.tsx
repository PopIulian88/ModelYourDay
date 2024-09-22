export type TextInputModel = {
  placeholder?: string;
  value: string | undefined;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  keyboardType?: "numeric" | "default";
  autoCapitalize?: "none";
  icon: string;
  onFocus: (b: boolean) => void;
};
