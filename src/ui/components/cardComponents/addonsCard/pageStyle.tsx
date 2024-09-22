import { StyleSheet } from "react-native";
import { style } from "../../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    height: 100,
    width: 100,
    padding: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 20,
    backgroundColor: style.color.white,
    borderColor: style.color.sunshade,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  image: {
    height: 50,
    width: 50,
  },
});
