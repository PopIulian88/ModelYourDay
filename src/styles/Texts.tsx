import { StyleSheet } from "react-native";
import { font } from "./Fonts";
import { color } from "./Colors";

export const text = StyleSheet.create({
  headingXL: {
    fontSize: 36,
    fontFamily: font.montserratBold,
    color: color.black,
  },
  headingL: {
    fontSize: 32,
    fontFamily: font.montserratSemiBold,
    color: color.black,
  },
  headingMD: {
    fontSize: 24,
    fontFamily: font.montserratSemiBold,
    color: color.black,
  },
  heading2MD: {
    fontSize: 24,
    fontFamily: font.montserratMedium,
    color: color.black,
  },
  headingSM: {
    fontSize: 16,
    fontFamily: font.montserratRegular,
    color: color.black,
  },
  heading2SM: {
    fontSize: 16,
    fontFamily: font.montserratMedium,
    color: color.black,
  },
  heading3SM: {
    fontSize: 16,
    fontFamily: font.montserratSemiBold,
    color: color.black,
  },

  bodyXL: {
    fontSize: 24,
    fontFamily: font.lexendSemiBold,
    color: color.black,
  },
  bodyL: {
    fontSize: 20,
    fontFamily: font.lexendRegular,
    color: color.black,
  },
  bodyMD: {
    fontSize: 16,
    fontFamily: font.lexendRegular,
    color: color.black,
  },
  body2MD: {
    fontSize: 16,
    fontFamily: font.lexendMedium,
    color: color.black,
  },
  body3MD: {
    fontSize: 16,
    fontFamily: font.lexendSemiBold,
    color: color.black,
  },
  bodySM: {
    fontSize: 14,
    fontFamily: font.montserratRegular,
    color: color.black,
  },
  body2SM: {
    fontSize: 14,
    fontFamily: font.montserratMedium,
    color: color.black,
  },
  body3SM: {
    fontSize: 14,
    fontFamily: font.montserratSemiBold,
    color: color.black,
  },
});
