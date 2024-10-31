import { StyleProp, TextStyle } from "react-native";

export enum TextType {
  headingXL = "heading_xl",
  headingL = "heading_l",
  headingMD = "heading_md",
  heading2MD = "heading_2md",
  headingSM = "heading_sm",
  heading2SM = "heading_2sm",
  heading3SM = "heading_3sm",
  bodyXL = "body_xl",
  bodyL = "body_l",
  bodyMD = "body_md",
  body2MD = "body_2md",
  body3MD = "body_3md",
  bodySM = "body_sm",
  body2SM = "body_2sm",
  body3SM = "body_3sm",
}

export type TextModel = {
  children: string | string[] | number | {} | undefined;
  type?: TextType;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
};
