import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: style.color.background,
  },
  scrollContainer: {
    width: "100%",
    padding: 10,
  },
  scrollContentContainer: {
    alignItems: "center",
  },
  title: {
    marginVertical: 20,
    textAlign: "center",
  },
  lottie: {
    height: 60,
    width: 60,
  },
  textInputContainer: {
    gap: 16,
    marginTop: 20,
  },
});
