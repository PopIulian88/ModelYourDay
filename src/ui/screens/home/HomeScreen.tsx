import {
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  View,
} from "react-native";
import { pageStyle } from "./pageStyle";
import { useSelector } from "react-redux";
import { IStore, useAppDispatch, userActions } from "../../../redux";
import {
  ButtonType,
  ModelCardType,
  MotivationalCardType,
  TextType,
} from "../../../models";
import {
  Button,
  Line,
  ModelCard,
  MotivationalCard,
  Strike,
  Text,
} from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { DefaultData, Images, Lottie, StringsRepo } from "../../../resources";
import { style } from "../../../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Fragment } from "react";

const HomeScreen = () => {
  const { username } = useSelector((state: IStore) => state.userReducer);
  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();

  const { top, bottom } = useSafeAreaInsets();

  const dispatch = useAppDispatch();

  const StrikeContainer = () => {
    const currentStrike = DefaultData.models[1].strike;
    return currentStrike < 3 ? (
      <View style={pageStyle.strikeContainer}>
        <Strike
          day={1}
          isCheck={currentStrike >= 1}
          border={currentStrike === 1}
        />
        <Strike
          day={2}
          isCheck={currentStrike >= 2}
          border={currentStrike === 2}
        />
        <Strike
          day={3}
          isCheck={currentStrike >= 3}
          border={currentStrike === 3}
        />
        <Strike day={4} />
        <Strike day={5} />
      </View>
    ) : (
      <View style={pageStyle.strikeContainer}>
        <Strike day={currentStrike - 2} isCheck />
        <Strike day={currentStrike - 1} isCheck />
        <Strike day={currentStrike} isCheck border />
        <Strike day={currentStrike + 1} />
        <Strike day={currentStrike + 2} />
      </View>
    );
  };

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
        {/*MODEL*/}
        <View style={pageStyle.modelSectionContainer}>
          <TouchableOpacity
            style={pageStyle.profileContainer}
            onPress={() => console.log("Handle Profile press")}
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
          <ModelCard
            type={ModelCardType.horizontal}
            title={DefaultData.models[1].name}
            description={DefaultData.models[1].description}
            image={DefaultData.models[1].image}
            onPress={() => {
              console.log("Mare model");
              // navigate("ModelScreen");
            }}
          />
          <View style={pageStyle.headerTextContainer}>
            <Text type={TextType.bodyMD} style={{ color: style.color.codGray }}>
              {StringsRepo.yourModelIsNow}:
            </Text>
            <Text
              type={TextType.body2MD}
              style={{ color: style.color.sunshade }}
            >
              {DefaultData.models[1].currentActivity}
            </Text>
          </View>
        </View>
        <Line />
        {/*MOTIVATION*/}
        <View style={pageStyle.motivationSectionContainer}>
          <View style={[pageStyle.smallContainer, { paddingHorizontal: 20 }]}>
            <Text type={TextType.headingMD}>{StringsRepo.strike}</Text>
            <StrikeContainer />
          </View>
          {DefaultData.models[1].motivation && (
            <View style={pageStyle.smallContainer}>
              <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
                {StringsRepo.motivation}
              </Text>
              <FlatList
                data={DefaultData.models[1].motivation}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={pageStyle.flatList}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                renderItem={(motivation) => {
                  return (
                    <Fragment>
                      <MotivationalCard
                        type={MotivationalCardType.MOTIVATIONAL}
                        header={DefaultData.models[1].name}
                        text={motivation.item}
                      />
                      {/*This force can make problems in the future*/}
                      {motivation.index ===
                        DefaultData.models[1].motivation!.length - 1 && (
                        <View style={{ width: 40 }} />
                      )}
                    </Fragment>
                  );
                }}
              />
            </View>
          )}
        </View>
        <Line />
        {/*FOOD*/}
        <View style={pageStyle.relaxSectionContainer}>
          {DefaultData.models[1].meals && (
            <View style={pageStyle.smallContainer}>
              <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
                {StringsRepo.food}
              </Text>
              <FlatList
                data={DefaultData.models[1].meals}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={pageStyle.flatList}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                renderItem={(meal) => {
                  return (
                    <Fragment>
                      <MotivationalCard
                        type={MotivationalCardType.DEFAULT}
                        cardNumber={meal.index + 1}
                        list={meal.item}
                      />
                      {/*This force can make problems in the future*/}
                      {meal.index ===
                        DefaultData.models[1].meals!.length - 1 && (
                        <View style={{ width: 40 }} />
                      )}
                    </Fragment>
                  );
                }}
              />
              <Text
                type={TextType.heading2SM}
                style={{ paddingHorizontal: 20 }}
              >
                {StringsRepo.todayNumberOfMeals}:{" "}
                <Text style={{ color: style.color.sunshade }}>
                  {DefaultData.models[1].meals.length.toString()}
                </Text>
              </Text>
            </View>
          )}
          {DefaultData.models[1].training && (
            <View style={pageStyle.smallContainer}>
              <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
                {StringsRepo.gym}
              </Text>
              <FlatList
                data={DefaultData.models[1].training}
                horizontal
                showsHorizontalScrollIndicator={false}
                style={pageStyle.flatList}
                ItemSeparatorComponent={() => <View style={{ width: 10 }} />}
                renderItem={(exercises) => {
                  return (
                    <Fragment>
                      <MotivationalCard
                        type={MotivationalCardType.DEFAULT}
                        header={StringsRepo.todayWeHit}
                        list={exercises.item}
                        lottie={Lottie.sport}
                      />
                      {/*This force can make problems in the future*/}
                      {exercises.index ===
                        DefaultData.models[1].training!.length - 1 && (
                        <View style={{ width: 40 }} />
                      )}
                    </Fragment>
                  );
                }}
              />
            </View>
          )}
          {DefaultData.models[1].freeTime && (
            <View style={pageStyle.smallContainer}>
              <Text type={TextType.headingMD} style={{ paddingHorizontal: 20 }}>
                {StringsRepo.freeTime}
              </Text>
              <View
                style={{
                  paddingHorizontal: 20,
                }}
              >
                <MotivationalCard
                  type={MotivationalCardType.DEFAULT}
                  list={DefaultData.models[1].freeTime}
                  lottie={Lottie.chill}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
      <Button
        type={ButtonType.PRIMARY}
        title={StringsRepo.contactYourMentor}
        onPress={() =>
          // dispatch(userActions.logout())
          console.log("Contact your mentor")
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
