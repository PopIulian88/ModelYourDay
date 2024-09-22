import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: style.color.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
