import { ScrollView, useWindowDimensions, View } from "react-native";
import {
  BackButton,
  Button,
  CurrentModelComplex,
  Line,
  MotivationalCard,
  Text,
} from "../../components";
import { ButtonType, MotivationalCardType, TextType } from "../../../models";
import { style } from "../../../styles";
import { DefaultData, Lottie, StringsRepo } from "../../../resources";
import { Fragment } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { pageStyle } from "./pageStyle";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
// Resolve the circle
import { Routes } from "../../navigation/constats";

const ModelScreen = () => {
  const { bottom, top } = useSafeAreaInsets();
  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();
  const { width } = useWindowDimensions();

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
        <View style={pageStyle.modelSection}>
          <Text type={TextType.headingMD} style={pageStyle.headerText}>
            {StringsRepo.currentModel}
          </Text>
          <CurrentModelComplex />
          <Button
            title={StringsRepo.challenge}
            type={ButtonType.SPECIAL}
            onPress={() =>
              // @ts-ignore
              navigate(Routes.chart)
            }
          />
        </View>
        <Line />
        <View style={pageStyle.openModalSection}>
          <Text type={TextType.headingMD} style={pageStyle.sectionText}>
            {StringsRepo.food}
          </Text>
          <View style={{ left: (width * 0.1) / 2 }}>
            <MotivationalCard
              type={MotivationalCardType.SIMPLE}
              text={`${StringsRepo.what} ${DefaultData.models[1].name} ${StringsRepo.eats}`}
              lottie={Lottie.pizza}
              onPress={() => console.log("Show model Food")}
            />
          </View>
          <Text type={TextType.headingMD} style={pageStyle.sectionText}>
            {StringsRepo.gym}
          </Text>
          <View style={{ left: (width * 0.1) / 2 }}>
            <MotivationalCard
              type={MotivationalCardType.SIMPLE}
              text={`${StringsRepo.whatIs} ${DefaultData.models[1].name} ${StringsRepo.workoutRoutine}`}
              lottie={Lottie.sport}
              onPress={() => console.log("Show model Gym")}
            />
          </View>
        </View>
        <Line />
      </ScrollView>
      <LinearGradient
        colors={style.color.gradient4}
        style={pageStyle.gradient}
      />
    </Fragment>
  );
};
export default ModelScreen;
