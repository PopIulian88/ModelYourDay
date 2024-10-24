import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    width: "100%",
    gap: 5,
    marginTop: 30,
  },
  addonsContainer: {
    width: "100%",
    padding: 16,
    gap: 10,
    justifyContent: "space-evenly",
    borderRadius: 20,
    backgroundColor: style.color.alto,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
});
