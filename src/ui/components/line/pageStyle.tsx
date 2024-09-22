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
    height: 30,
    width: 30,
    top: -20,
    position: "absolute",
    backgroundColor: style.color.background,
  },
});
