import { StyleSheet } from "react-native";
import { style } from "../../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 175,
    width: "100%",
    padding: 10,
    gap: 4,
    alignSelf: "flex-start",
    justifyContent: "space-between",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: style.color.sunshade,
    backgroundColor: style.color.white,
  },
  motivationalStyle: {
    borderWidth: 0,
    backgroundColor: style.color.alto,
  },
  motivationalHeaderStyle: {
    marginBottom: 10,
  },
  lottie: {
    width: 80,
    height: "100%",
    alignSelf: "center",
  },
  simpleText: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
