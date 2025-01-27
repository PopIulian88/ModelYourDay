import { StyleSheet } from "react-native";
import { style } from "../../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    gap: 10,
  },
  strikeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 20,
    borderRadius: 20,
    backgroundColor: style.color.alto,
  },
  underText: {
    textAlign: "center",
    color: style.color.indochine,
  },
});
