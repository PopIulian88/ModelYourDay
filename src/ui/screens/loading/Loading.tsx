import { StatusBar, View } from "react-native";
import { Text } from "../../components";
import { pageStyle } from "./pageStyle";
import { style } from "../../../styles";
import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";
import LottieView from "lottie-react-native";
import { Lottie } from "../../../resources";
import { TextType } from "../../../models";

const Loading = () => {
  const { isModalVisible } = useSelector((state: IStore) => state.rootReducer);

  return (
    <Fragment>
      <View style={pageStyle.container}>
        <LottieView
          source={Lottie.aiLoading}
          autoPlay
          loop
          style={pageStyle.lottie}
        />
        <Text type={TextType.headingL}>Loading...</Text>
      </View>
      <StatusBar
        backgroundColor={
          isModalVisible ? style.color.backgroundFade : style.color.background
        }
      />
    </Fragment>
  );
};
export default Loading;
