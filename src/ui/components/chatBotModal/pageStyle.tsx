import { StyleSheet } from "react-native";
import { style } from "../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginBottom: 26,
  },
  headerText: {
    marginBottom: 20,
    textAlign: "center",
  },
  lottie: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 100,
    width: "100%",
    position: "absolute",
    bottom: 0,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  textInput: {
    ...style.text.bodyL,
    height: 100,
    width: "80%",
    padding: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: style.color.sunshade,
    backgroundColor: "white",
  },
  sendButton: {
    flex: 1,
    alignItems: "center",
  },
  gradient: {
    position: "absolute",
    width: "100%",
    height: 30,
    bottom: 0,
    zIndex: 1,
  },
});
