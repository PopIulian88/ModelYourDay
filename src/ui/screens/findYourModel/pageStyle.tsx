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
  findModelContainer: {
    paddingVertical: 20,
    gap: 10,
  },
  modelFoundContainer: {
    alignItems: "center",
    gap: 20,
    width: "100%",
  },
  backButton: {
    alignSelf: "flex-start",
    margin: 10,
  },
  title: {
    marginVertical: 20,
  },
});
