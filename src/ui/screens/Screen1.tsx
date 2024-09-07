import { StyleSheet, View } from "react-native";
import { Icon, Text } from "../components";
import { IconAssets } from "../../resources";
import { TextType } from "../../models";
import { style } from "../../styles";

export const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text type={TextType.headingL} style={{ color: style.color.brown }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Icon name={IconAssets.check} size={60} color="red" />
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
