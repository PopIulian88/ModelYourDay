import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { pageStyle } from "./pageStyle";
import { useSelector } from "react-redux";
import { IStore, useAppDispatch, userActions } from "../../../redux";
import { ButtonType, ModelCardType, TextType } from "../../../models";
import { Button, Line, ModelCard, Text } from "../../components";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import {
  DefaultData,
  IconAssets,
  Images,
  StringsRepo,
} from "../../../resources";
import { style } from "../../../styles";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Fragment } from "react";

const HomeScreen = () => {
  const { username } = useSelector((state: IStore) => state.userReducer);
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
      >
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
        <View style={pageStyle.motivationSectionContainer}></View>
      </ScrollView>
      <Button
        type={ButtonType.PRIMARY}
        title={"Logout"}
        onPress={() => dispatch(userActions.logout())}
        style={[
          pageStyle.bottomButton,
          { marginBottom: Math.max(bottom + 6, 16) },
        ]}
      />
    </Fragment>
  );
};
export default HomeScreen;
