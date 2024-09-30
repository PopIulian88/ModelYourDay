import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
  },
  safeArea: {
    flex: 0,
    backgroundColor: style.color.sunshade,
  },
  lottie: {
    width: "100%",
  },
  backButton: {
    position: "absolute",
    top: 16,
    left: 16,
  },
  middleContainer: {
    width: "100%",
    padding: 16,
    gap: 24,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: style.color.codGray,
  },
  textContainer: {
    width: "100%",
    gap: 8,
    alignItems: "center",
  },
  emailText: {
    color: style.color.goldDrop,
  },
});
