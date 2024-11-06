import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: style.color.background,
    paddingTop: 40,
  },
  scrollContentContainer: {
    alignItems: "center",
    gap: 10,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 1,
  },
  headerTextContainer: {
    alignItems: "center",
  },
  challengeContainer: {
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    gap: 20,
  },
  lottie: {
    width: 200,
    height: 200,
  },
});
