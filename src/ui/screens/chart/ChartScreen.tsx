import { ScrollView, View } from "react-native";
import { pageStyle } from "./pageStyle";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { BackButton, ChallengeCard, Line, Text } from "../../components";
import { Fragment, useState } from "react";
import { TextType } from "../../../models";
import { style } from "../../../styles";
import { DefaultData, Lottie, StringsRepo } from "../../../resources";
import LottieView from "lottie-react-native";

const ChartScreen = () => {
  const { bottom, top } = useSafeAreaInsets();
  const [foodCompleted, setFoodCompleted] = useState(false);
  const [gymCompleted, setGymCompleted] = useState(false);
  const [freeTimeCompleted, setFreeTimeCompleted] = useState(false);

  const dayOfWeek = new Date().getDay() - 1;
  return (
    <Fragment>
      <BackButton styles={[pageStyle.backButton, { marginTop: top }]} />
      <ScrollView
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
            Your stats from
          </Text>
          <Text type={TextType.heading2SM} style={{ color: style.color.gray }}>
            {DefaultData.models[1].name}
          </Text>
        </View>
        <Line />
        <View style={pageStyle.challengeContainer}>
          <Text type={TextType.headingMD} style={{ alignSelf: "flex-start" }}>
            {StringsRepo.challenge}
          </Text>
          {/*TODO: If there is no challenge make a button to generate them */}
          {/*TODO: FInd a logic to save the completed challenges*/}
          {/*  A solution  must be, when we change the data in redux,*/}
          {DefaultData.models[1].challenges ? (
            <Fragment>
              <ChallengeCard
                header={StringsRepo.food}
                description={DefaultData.models[1].challenges[dayOfWeek].food}
                color={style.color.barberry}
                isCompleted={foodCompleted}
                onCheck={(r) => setFoodCompleted(r)}
              />
              <ChallengeCard
                header={StringsRepo.gym}
                description={DefaultData.models[1].challenges[dayOfWeek].gym}
                color={style.color.sunshade}
                isCompleted={gymCompleted}
                onCheck={(r) => setGymCompleted(r)}
              />
              <ChallengeCard
                header={StringsRepo.freeTime}
                description={
                  DefaultData.models[1].challenges[dayOfWeek].freeTime
                }
                color={style.color.chenin}
                isCompleted={freeTimeCompleted}
                onCheck={(r) => setFreeTimeCompleted(r)}
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
    </Fragment>
  );
};
export default ChartScreen;
