import { StyleSheet, Text, View } from "react-native";
import { style } from "../../styles";
import { IconAssets } from "../../resources/icons/IconAssets";
import { Icon } from "../components";

export const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text style={{ fontFamily: style.font.montserratBold }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Icon name={IconAssets.checkSmall} size={60} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
