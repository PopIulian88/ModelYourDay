import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  scrollContainer: {
    flex: 1,
    backgroundColor: style.color.background,
  },
  scrollContentContainer: {
    gap: 10,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    marginVertical: 10,
    position: "absolute",
    zIndex: 1,
  },
  userContainer: {
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
    paddingHorizontal: 20,
  },
  profileTextContainer: {
    alignItems: "center",
  },
  modelActionTextContainer: {
    alignSelf: "flex-start",
    flexDirection: "row",
    paddingTop: 10,
    gap: 10,
  },
  profileImage: {
    height: 100,
    width: 100,
    borderRadius: 50,
    marginTop: 20,
    alignSelf: "center",
  },
  bottomButton: {
    position: "absolute",
    bottom: 0,
    alignSelf: "center",
  },
});
