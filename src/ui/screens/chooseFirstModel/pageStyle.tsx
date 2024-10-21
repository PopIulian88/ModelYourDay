import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
    backgroundColor: style.color.background,
  },
  headerContainer: {
    width: "100%",
    gap: 10,
    alignItems: "center",
  },
  headerTitle: {
    textAlign: "center",
    color: style.color.sunshade,
  },
  headerSubtitle: {
    textAlign: "center",
    color: style.color.brown,
  },
});
