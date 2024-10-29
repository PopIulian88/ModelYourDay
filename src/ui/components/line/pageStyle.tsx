import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    height: 2,
    width: "100%",
    backgroundColor: style.color.sunshade,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 20,
  },
  lottie: {
    height: 40,
    width: 40,
    top: -30,
    position: "absolute",
    backgroundColor: style.color.background,
  },
});
