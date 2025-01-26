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
  middleContainer: {
    width: "100%",
    gap: 24,
    alignItems: "center",
  },
  authStatusContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
  },
  textInputContainer: {
    gap: 16,
  },
  bottomButtonContainer: {
    width: "100%",
    alignItems: "center",
    gap: 10,
  },
});
