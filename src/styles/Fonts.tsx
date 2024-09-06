import { FC, ReactNode } from "react";
import { useFonts } from "expo-font";

export const WithExpoFonts: FC<{ children: ReactNode }> = ({ children }) => {
  const [doneLoading] = useFonts({
    "Lexend-Medium": require("../resources/fonts/Lexend-Medium.ttf"),
    "Lexend-Regular": require("../resources/fonts/Lexend-Regular.ttf"),
    "Lexend-SemiBold": require("../resources/fonts/Lexend-SemiBold.ttf"),
    "Montserrat-Medium": require("../resources/fonts/Montserrat-Medium.ttf"),
    "Montserrat-Regular": require("../resources/fonts/Montserrat-Regular.ttf"),
    "Montserrat-SemiBold": require("../resources/fonts/Montserrat-SemiBold.ttf"),
    "Montserrat-Bold": require("../resources/fonts/Montserrat-Bold.ttf"),
    IconsFont: require("../resources/fonts/IconsFont.ttf"),
  });

  return doneLoading ? children : null;
};

export const font = {
  //Lexend
  lexendMedium: "Lexend-Medium",
  lexendRegular: "Lexend-Regular",
  lexendSemiBold: "Lexend-SemiBold",
  //Montserrat
  montserratMedium: "Montserrat-Medium",
  montserratRegular: "Montserrat-Regular",
  montserratSemiBold: "Montserrat-SemiBold",
  montserratBold: "Montserrat-Bold",
  //IconFont
  IconsFont: "IconsFont",
};
