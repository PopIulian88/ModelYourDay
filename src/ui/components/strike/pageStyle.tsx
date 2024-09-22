import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    height: 60,
    width: 40,
    gap: 5,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: style.color.gray,
    borderColor: style.color.barberry,
  },
  lottie: {
    height: 20,
    width: 20,
    backgroundColor: style.color.white,
    borderRadius: 20,
  },
});
