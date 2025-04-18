import { StyleSheet } from "react-native";

export const pageStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  leftContainer: {
    flexDirection: "row",
    gap: 5,
  },
  reload: {
    justifyContent: "center",
    alignItems: "center",
  },
  reloadLottie: {
    width: 30,
    height: 30,
  },
});
