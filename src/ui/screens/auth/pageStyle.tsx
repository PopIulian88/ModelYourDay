import { StyleSheet } from "react-native";

export const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 16,
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
});
