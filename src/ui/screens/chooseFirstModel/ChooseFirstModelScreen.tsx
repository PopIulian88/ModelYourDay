import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import { pageStyle } from "./pageStyle";
import { DefaultData, Images, Lottie, StringsRepo } from "../../../resources";
import { ModelCard, Text } from "../../components";
import { ModelCardType, TextType } from "../../../models";
import { Fragment, useState } from "react";
import Carousel from "react-native-reanimated-carousel";
import LottieView from "lottie-react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { style } from "../../../styles";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
// Remove the cycle
import { Routes } from "../../navigation/constats";

const ChooseFirstModelScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselAutoPlay, setCarouselAutoPlay] = useState(true);

  const { width, height } = useWindowDimensions();
  const { bottom } = useSafeAreaInsets();

  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();

  const onModelSelected = (index: number) => {
    setCarouselAutoPlay(false);
    if (index !== DefaultData.models.length - 1) {
      // @ts-ignore
      navigate(Routes.findYourModel, DefaultData.models[index]);
    } else {
      // @ts-ignore
      navigate(Routes.findYourModel);
    }
  };

  const onSnapToItem = (index: number) => {
    if (index < currentIndex) {
      //   Going back
      setCarouselAutoPlay(false);
    }
    setCurrentIndex(index);
  };

  const ModelCards = (index: number) => {
    return (
      <View style={pageStyle.modelCardContainer}>
        {index !== DefaultData.models.length - 1 ? (
          <ModelCard
            type={ModelCardType.vertical}
            title={DefaultData.models[index].name}
            description={DefaultData.models[index].description}
            image={DefaultData.models[index].image}
            onPress={() => onModelSelected(index)}
          />
        ) : (
          <TouchableOpacity
            onPress={() => onModelSelected(index)}
            style={[pageStyle.findWithAiContainer, { height: height * 0.6 }]}
          >
            <LottieView
              loop={true}
              autoPlay={true}
              source={Lottie.aiBot}
              style={pageStyle.findWithAiAnimation}
            />
            <Text type={TextType.headingL} style={pageStyle.aiText}>
              {DefaultData.models[index].description}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    );
  };

  return (
    <Fragment>
      <SafeAreaView style={pageStyle.safeArea} />
      <ImageBackground
        source={Images.background}
        style={[
          pageStyle.container,
          { paddingBottom: Math.max(bottom + 6, 16) },
        ]}
        resizeMode={"stretch"}
      >
        <View style={pageStyle.headerContainer}>
          <Text type={TextType.headingXL} style={pageStyle.headerTitle}>
            {StringsRepo.chooseYoursFirstModel}
          </Text>
          <Text type={TextType.headingSM} style={pageStyle.headerSubtitle}>
            {StringsRepo.thisChoiceCanBeChangedAfter}
          </Text>
        </View>
        <Carousel
          loop
          width={width}
          height={height * 0.62}
          autoPlay={carouselAutoPlay}
          data={DefaultData.models}
          scrollAnimationDuration={500}
          onSnapToItem={(index) => {
            onSnapToItem(index);
          }}
          renderItem={({ index }) => ModelCards(index)}
        />
      </ImageBackground>
      <StatusBar backgroundColor={style.color.sunshade} />
    </Fragment>
  );
};
export default ChooseFirstModelScreen;
