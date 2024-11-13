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
    gap: 20,
  },
  backButton: {
    position: "absolute",
    top: 10,
    left: 20,
    zIndex: 1,
  },
  headerText: {
    alignSelf: "center",
  },
  modelSection: {
    width: "100%",
    gap: 20,
    paddingHorizontal: 20,
  },
  openModalSection: {
    width: "100%",
    paddingHorizontal: 20,
    gap: 5,
  },
  sectionText: {
    alignSelf: "flex-start",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: 90,
    bottom: 0,
    zIndex: 1,
  },
});
