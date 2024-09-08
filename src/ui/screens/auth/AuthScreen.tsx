import { Button, View } from "react-native";
import { Icon, Text } from "../../components";
import { TextType } from "../../../models";
import { style } from "../../../styles";
import { IconAssets, Lottie, StringsRepo } from "../../../resources";
import LottieView from "lottie-react-native";
import { pageStyle } from "./pageStyle";
import { rootActions, useAppDispatch } from "../../../redux";

const AuthScreen = () => {
  const dispatch = useAppDispatch();

  return (
    <View style={pageStyle.container}>
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
      <Button
        title={"Login"}
        onPress={() => dispatch(rootActions.setIsLoggedIn(true))}
      />
    </View>
  );
};
export default AuthScreen;
