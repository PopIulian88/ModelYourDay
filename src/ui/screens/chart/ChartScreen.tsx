import { ScrollView, useWindowDimensions, View } from "react-native";
import { pageStyle } from "./pageStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  BackButton,
  ChallengeCard,
  HeaderComponents,
  Line,
  Text,
} from "../../components";
import React, { Fragment, useRef } from "react";
import { challengeType, RegenDataModel, TextType } from "../../../models";
import { style } from "../../../styles";
import { Lottie, StringsRepo } from "../../../resources";
import LottieView from "lottie-react-native";
import PieChart from "react-native-pie-chart";
import { LinearGradient } from "expo-linear-gradient";
import { RouteProp, useFocusEffect, useRoute } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { IStore } from "../../../redux";
import { useSelector } from "react-redux";

const ChartScreen = () => {
  const { params } = useRoute<RouteProp<MainNavigatorParams, "Chart">>();

  const { bottom, top } = useSafeAreaInsets();
  const { height } = useWindowDimensions();

  const { model } = useSelector((state: IStore) => state.modelReducer);

  const widthAndHeight = 300;
  const series = [
    (model?.challengesCompleted.food ?? 0) + 1,
    (model?.challengesCompleted.gym ?? 0) + 1,
    (model?.challengesCompleted.freeTime ?? 0) + 1,
    model?.challengesCompleted.fail ?? 0,
  ];
  const sliceColor = [
    style.color.barberry,
    style.color.sunshade,
    style.color.chenin,
    style.color.alto,
  ];

  const scrollViewRef = useRef<ScrollView>(null);

  useFocusEffect(
    React.useCallback(() => {
      setTimeout(() => {
        if (scrollViewRef.current && params?.scroll) {
          scrollViewRef.current.scrollTo({ y: height * 0.4, animated: true });
        }
      }, 300);
    }, []),
  );

  const Tag = ({ text, color }: { text: string; color: string }) => (
    <View style={pageStyle.tagSmallContainer}>
      <View style={{ height: 20, width: 20, backgroundColor: color }}></View>
      <Text type={TextType.bodyMD}>{text}</Text>
    </View>
  );

  return (
    <Fragment>
      <BackButton styles={[pageStyle.backButton, { marginTop: top }]} />
      <ScrollView
        ref={scrollViewRef}
        style={pageStyle.scrollContainer}
        contentContainerStyle={[
          pageStyle.scrollContentContainer,
          { paddingTop: top, paddingBottom: Math.max(bottom + 90, 100) },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={pageStyle.headerTextContainer}>
          <Text
            type={TextType.headingMD}
            style={{ color: style.color.codGray }}
          >
            {StringsRepo.yourStatsFrom}
          </Text>
          <Text type={TextType.heading2SM} style={{ color: style.color.gray }}>
            {model?.name ?? "Unknown"}
          </Text>
        </View>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={series}
          sliceColor={sliceColor}
          coverRadius={0.35}
        />
        <View style={pageStyle.tagContainer}>
          <Tag text={StringsRepo.gym} color={style.color.sunshade} />
          <Tag text={StringsRepo.freeTime} color={style.color.chenin} />
          <Tag text={StringsRepo.food} color={style.color.barberry} />
          <Tag text={StringsRepo.fails} color={style.color.alto} />
        </View>
        <Line />
        <View style={pageStyle.challengeContainer}>
          <HeaderComponents
            text={StringsRepo.challenge}
            style={pageStyle.challengeHeaderContainer}
            showReload={
              !model?.challenges || model?.challenges?.food === "Unknown"
            }
            dataToReload={RegenDataModel.CHALLENGE}
          />

          {model?.challenges ? (
            <Fragment>
              <ChallengeCard
                type={challengeType.FOOD}
                header={StringsRepo.food}
                description={model.challenges.food}
                color={style.color.barberry}
                isCompleted={!!(model?.currentChallenge.food ?? 0 > 0)}
              />
              <ChallengeCard
                type={challengeType.GYM}
                header={StringsRepo.gym}
                description={model.challenges.gym}
                color={style.color.sunshade}
                isCompleted={!!(model?.currentChallenge.gym ?? 0 > 0)}
              />
              <ChallengeCard
                type={challengeType.FREE_TIME}
                header={StringsRepo.freeTime}
                description={model.challenges.freeTime}
                color={style.color.chenin}
                isCompleted={!!(model?.currentChallenge.freeTime ?? 0 > 0)}
              />
            </Fragment>
          ) : (
            <LottieView
              source={Lottie.influencer}
              style={pageStyle.lottie}
              loop
              autoPlay
            />
          )}
        </View>
      </ScrollView>
      <LinearGradient
        colors={style.color.gradient4}
        style={pageStyle.gradient}
      />
    </Fragment>
  );
};
export default ChartScreen;
