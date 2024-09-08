import { Image, StyleSheet, View } from "react-native";
import { Icon, Text } from "../components";
import { IconAssets, Images, Lottie, StringsRepo } from "../../resources";
import { TextType } from "../../models";
import { style } from "../../styles";
import LottieView from "lottie-react-native";

export const Screen1 = () => {
  return (
    <View style={styles.container}>
      <Text type={TextType.headingL} style={{ color: style.color.brown }}>
        Open up App.tsx to start working on your app!
      </Text>
      <Icon name={IconAssets.check} size={60} color="red" />
      <Text>{StringsRepo.yes}</Text>
      {/*<Image source={Images.money} style={{ width: 200, height: 200 }} />*/}
      <LottieView
        style={{ height: 200, width: 200 }}
        source={Lottie.lit}
        autoPlay
        loop
        renderMode={"SOFTWARE"}
      />
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
