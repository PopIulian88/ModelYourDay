import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { pageStyle } from "./pageStyle";
import { useSelector } from "react-redux";
import { IStore, rootActions, useAppDispatch } from "../../../redux";
import { ButtonType, TextType } from "../../../models";
import {
  Button,
  CurrentModelComplex,
  FoodModelComplex,
  FreetimeListModelComplex,
  GymModelComplex,
  Line,
  MotivationModelComplex,
  StrikeBoxComplex,
  Text,
} from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { Images, StringsRepo } from "../../../resources";
import { style } from "../../../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Fragment } from "react";
// To resolve the circle
import { Routes } from "../../navigation/constats";
import { helper, modelHelper } from "../../../helper";

const HomeScreen = () => {
  const { username, isOnboardingComplete, modelsList, selectedModel } =
    useSelector((state: IStore) => state.userReducer);
  const { model } = useSelector((state: IStore) => state.modelReducer);
  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();

  const { top, bottom } = useSafeAreaInsets();

  const dispatch = useAppDispatch();

  return (
    <Fragment>
      <ScrollView
        style={pageStyle.scrollContainer}
        contentContainerStyle={[
          pageStyle.scrollContentContainer,
          { paddingTop: top, paddingBottom: Math.max(bottom + 90, 100) },
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={pageStyle.modelSectionContainer}>
          <TouchableOpacity
            style={pageStyle.profileContainer}
            onPress={() =>
              // @ts-ignore
              navigate(Routes.profile)
            }
            hitSlop={{ top: 10, right: 10, bottom: 10, left: 10 }}
          >
            <Image source={Images.profile} style={pageStyle.profileImage} />
          </TouchableOpacity>
          <View>
            <View style={pageStyle.headerTextContainer}>
              <Text type={TextType.heading2MD}>{StringsRepo.hello},</Text>
              <Text
                type={TextType.headingMD}
                style={{ color: style.color.sunshade }}
              >
                {username}
              </Text>
            </View>
            <Text
              type={TextType.heading2SM}
              style={{ color: style.color.gray }}
            >
              {StringsRepo.readyToBecomeYourModel}
            </Text>
          </View>
          <CurrentModelComplex
            onPress={() =>
              // @ts-ignore
              navigate(Routes.model)
            }
          />
        </View>
        <Line />
        <View style={pageStyle.motivationSectionContainer}>
          <StrikeBoxComplex styles={{ paddingHorizontal: 20 }} />
          <MotivationModelComplex />
        </View>
        <Line />
        <View style={pageStyle.relaxSectionContainer}>
          <FoodModelComplex
            meals={modelHelper.getMealsByDay(helper.getCurrentDay()).meals}
          />
          <GymModelComplex
            trainings={
              modelHelper.getTrainingsByDay(helper.getCurrentDay()).trainings
            }
          />
          <FreetimeListModelComplex />
        </View>
      </ScrollView>
      <Button
        type={ButtonType.PRIMARY}
        title={StringsRepo.contactYourMentor}
        onPress={() =>
          dispatch(
            rootActions.showModal({
              isChatBot: true,
              title: "",
              lottie: "",
              buttonTitle: "",
              buttonAction: () => {},
            }),
          )
        }
        style={[
          pageStyle.bottomButton,
          { marginBottom: Math.max(bottom + 6, 16) },
        ]}
      />
    </Fragment>
  );
};
export default HomeScreen;
