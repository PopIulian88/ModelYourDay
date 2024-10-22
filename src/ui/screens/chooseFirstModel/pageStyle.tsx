import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 30,
    backgroundColor: style.color.background,
  },
  safeArea: {
    flex: 0,
    backgroundColor: style.color.sunshade,
  },
  headerContainer: {
    width: "100%",
    gap: 10,
    alignItems: "center",
  },
  headerTitle: {
    textAlign: "center",
    color: style.color.black,
  },
  headerSubtitle: {
    textAlign: "center",
    color: style.color.background,
  },
  modelCardContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  animation: {
    width: "100%",
    height: 100,
  },
});
