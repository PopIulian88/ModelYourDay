import { StyleSheet } from "react-native";
import { style } from "../../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "85%",
    gap: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textInputContainer: {
    flex: 1,
  },
  textInput: {
    width: "100%",
    ...style.text.bodyL,
    color: style.color.tundora,
    paddingBottom: 8,
    paddingHorizontal: 5,
  },
  line: {
    height: 1,
    width: "100%",
    backgroundColor: style.color.alto,
  },
});
