import { View } from "react-native";
import { pageStyle } from "./pageStyle";
import LottieView from "lottie-react-native";
import { Lottie } from "../../../resources";

const Line = () => {
  return (
    <View style={pageStyle.container}>
      <LottieView source={Lottie.lit} autoPlay loop style={pageStyle.lottie} />
    </View>
  );
};
export default Line;
