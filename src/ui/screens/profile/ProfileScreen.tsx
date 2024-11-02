import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { pageStyle } from "./pageStyle";
//To resolve the cyrcle
import { Routes } from "../../navigation/constats";
import { IconAssets, Images, StringsRepo } from "../../../resources";
import {
  BackButton,
  Button,
  CurrentModelComplex,
  Icon,
  Line,
  Text,
} from "../../components";
import { ButtonType, TextType } from "../../../models";
import { style } from "../../../styles";
import { Fragment } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IStore, useAppDispatch, userActions } from "../../../redux";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const { username } = useSelector((state: IStore) => state.userReducer);
  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();

  const { top, bottom } = useSafeAreaInsets();

  const dispatch = useAppDispatch();

  const Header = () => {
    return (
      <View style={[pageStyle.headerContainer, { paddingTop: top }]}>
        <BackButton />
        <TouchableOpacity
          onPress={() => console.log("Navigate to chart screen")}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Icon
            name={IconAssets.pieChart}
            size={30}
            color={style.color.sunshade}
          />
        </TouchableOpacity>
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
        <Header />
        <View style={pageStyle.userContainer}>
          <Image source={Images.profile} style={pageStyle.profileImage} />
          <View style={pageStyle.profileTextContainer}>
            <Text type={TextType.headingMD}>{username}</Text>
            <Text
              type={TextType.heading2SM}
              style={{ color: style.color.gray }}
            >
              {StringsRepo.readyToBecomeYourModel}
            </Text>
          </View>
          <CurrentModelComplex styles={{ width: "100%" }} />
        </View>
        <Line />
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            type={ButtonType.SPECIAL}
            title={StringsRepo.logout}
            onPress={() => {
              dispatch(userActions.logout());
            }}
          />
        </View>
      </ScrollView>
      <Button
        type={ButtonType.PRIMARY}
        title={StringsRepo.findANewMentor}
        onPress={() => {
          // @ts-ignore
          navigate(Routes.findYourModel);
        }}
        style={[
          pageStyle.bottomButton,
          { marginBottom: Math.max(bottom + 6, 16) },
        ]}
      />
    </Fragment>
  );
};
export default ProfileScreen;
