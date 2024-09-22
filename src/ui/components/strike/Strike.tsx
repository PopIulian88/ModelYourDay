import { StrikeModel, TextType } from "../../../models";
import { View } from "react-native";
import { pageStyle } from "./pageStyle";
import Text from "../updatedComponents/text/Text";
import { style } from "../../../styles";
import LottieView from "lottie-react-native";
import { Lottie } from "../../../resources";

const Strike = (props: StrikeModel) => {
  return (
    <View
      style={[
        pageStyle.container,
        props.isCheck && { backgroundColor: style.color.goldDrop },
        props.border && { borderWidth: 2 },
      ]}
    >
      <Text type={TextType.body3SM}>{props.day}</Text>
      {props.isCheck && (
        <LottieView
          source={Lottie.lit}
          style={pageStyle.lottie}
          autoPlay
          loop
        />
      )}
    </View>
  );
};
export default Strike;
