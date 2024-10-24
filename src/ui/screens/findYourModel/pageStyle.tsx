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
  backButton: {
    alignSelf: "flex-start",
    margin: 10,
  },
  title: {
    marginVertical: 20,
  },
  findModelContainer: {
    width: "100%",
    gap: 5,
    marginTop: 30,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
  },
  addonsContainer: {
    width: "100%",
    padding: 16,
    gap: 10,
    justifyContent: "space-evenly",
    borderRadius: 20,
    backgroundColor: style.color.alto,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
