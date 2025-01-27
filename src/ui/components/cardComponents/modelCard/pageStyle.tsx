import { StyleSheet } from "react-native";
import { style } from "../../../../styles";

export const pageStyle = StyleSheet.create({
  container: {
    height: 150,
    width: 150,
    borderRadius: 20,
    borderColor: style.color.sunshade,
    backgroundColor: style.color.gray,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  verticalContainer: {
    width: "75%",
    borderWidth: 2,
  },
  verticalTextContainer: {
    width: "100%",
    padding: 10,
    gap: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    backgroundColor: style.color.background,
  },
  chipChallenge: {
    width: "60%",
    position: "absolute",
    zIndex: 1,
    top: 0,
    left: -20,
    transform: [{ rotate: "-10deg" }],
  },
  horizontalContainer: {
    height: 175,
    width: "100%",
    borderWidth: 1,
  },
  imageContainer: {
    flex: 1,
    padding: 10,
    paddingVertical: 16,
    justifyContent: "flex-end",
  },
  imageStyle: {
    borderRadius: 20,
    resizeMode: "cover",
  },
  noImageStyle: {
    margin: 50,
    resizeMode: "contain",
  },
  imageTextContainer: {
    gap: 5,
    zIndex: 1,
  },
  title: {
    color: style.color.background,
  },
  verticalTitle: {
    color: style.color.codGray,
  },
  description: {
    color: style.color.white,
  },
  verticalDescription: {
    color: style.color.codGray,
    marginBottom: 20,
  },
  gradient: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    height: 150,
    borderRadius: 20,
  },
  verticalGradient: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
});
