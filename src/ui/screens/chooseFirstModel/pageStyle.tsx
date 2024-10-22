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
    paddingHorizontal: 10,
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
  findWithAiContainer: {
    width: "75%",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderRadius: 20,
    borderColor: style.color.barberry,
    backgroundColor: style.color.background,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  findWithAiAnimation: {
    width: "80%",
    height: "40%",
  },
  aiText: {
    textAlign: "center",
    color: style.color.barberry,
  },
  animation: {
    width: 100,
    height: 100,
  },
});
