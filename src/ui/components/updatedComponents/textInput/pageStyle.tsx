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
  specialContainer: {
    flexDirection: "row",
    width: "100%",
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    backgroundColor: style.color.white,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  textInputContainer: {
    flex: 1,
  },
  inputContainer: {
    flexDirection: "row",
    width: "90%",
    alignItems: "center",
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
