import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: style.color.background,
  },
  scrollContentContainer: {
    flex: 1,
    gap: 10,
  },
  modelSectionContainer: {
    width: "100%",
    gap: 10,
    padding: 20,
  },
  profileContainer: {
    position: "absolute",
    right: 20,
    zIndex: 1,
  },
  profileImage: {
    width: 50,
    height: 50,
  },
  headerTextContainer: {
    flexDirection: "row",
    paddingTop: 10,
    gap: 10,
  },
  motivationSectionContainer: {
    width: "100%",
    gap: 10,
    padding: 20,
  },
  bottomButton: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
});
