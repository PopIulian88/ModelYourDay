import { ImageSourcePropType } from "react-native";

export type AddonsCardModel = {
  image: ImageSourcePropType;
  title: string;
  isCheck?: boolean;
  onPress?: () => void;
};
