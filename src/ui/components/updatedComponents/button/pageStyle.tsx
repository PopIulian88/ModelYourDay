import { StyleSheet } from "react-native";
import { style } from "../../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    width: "80%",
    padding: 12,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: style.color.sunshade,

    shadowColor: style.color.black,
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
  },
  specialContainer: {
    width: "100%",
    padding: 8,
    borderRadius: 20,
  },
  text: {
    color: style.color.serenade,
  },
});
