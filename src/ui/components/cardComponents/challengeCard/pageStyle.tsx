import { StyleSheet } from "react-native";
import { style } from "../../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 135,
    width: "100%",
    borderWidth: 1,
    borderRadius: 20,
  },
  leftContainer: {
    height: "100%",
    width: 25,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
  },
  textContainer: {
    flex: 1,
    padding: 10,
    gap: 5,
  },
  checkContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: style.color.alto,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginRight: 10,
  },
});
