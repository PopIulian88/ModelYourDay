import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { pageStyle } from "./pageStyle";
//To resolve the cyrcle
import { Routes } from "../../navigation/constats";
import { IconAssets, Images, Lottie, StringsRepo } from "../../../resources";
import {
  BackButton,
  Button,
  CurrentModelComplex,
  Icon,
  Line,
  Text,
  UserModelsComplex,
} from "../../components";
import { ButtonType, TextType } from "../../../models";
import { style } from "../../../styles";
import { Fragment } from "react";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  IStore,
  modelActions,
  rootActions,
  useAppDispatch,
  userActions,
} from "../../../redux";
import { useSelector } from "react-redux";

const ProfileScreen = () => {
  const { username } = useSelector((state: IStore) => state.userReducer);
  const { navigate } = useNavigation<NavigationProp<MainNavigatorParams>>();

  const { top, bottom } = useSafeAreaInsets();

  const dispatch = useAppDispatch();

  const onLogout = () => {
    dispatch(
      rootActions.showModal({
        title: StringsRepo.leavingSoSoon,
        lottie: Lottie.astronaut,
        buttonTitle: StringsRepo.noItWasMistake,
        buttonAction: () => {
          dispatch(rootActions.hideModal());
        },
        secondaryButtonTitle: StringsRepo.yesLogout,
        secondaryButtonAction: async () => {
          dispatch(rootActions.hideModal());
          await dispatch(userActions.logout()).then(() => {
            // Reset model state here because on redux we have a import loop
            dispatch(modelActions.resetModel());
          });
        },
      }),
    );
  };

  const Header = () => {
    return (
      <View style={[pageStyle.headerContainer, { paddingTop: top }]}>
        <BackButton />
        <TouchableOpacity
          onPress={() => {
            // @ts-ignore
            navigate(Routes.chart, { scroll: false });
          }}
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          style={pageStyle.chartContainer}
        >
          <Icon
            name={IconAssets.pieChart}
            size={25}
            color={style.color.sunshade}
            style={{ paddingLeft: 2 }}
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
          <CurrentModelComplex
            styles={{ width: "100%" }}
            onPress={() =>
              // @ts-ignore
              navigate(Routes.model)
            }
          />
        </View>
        <Line />
        <UserModelsComplex />
        <View style={{ paddingHorizontal: 20 }}>
          <Button
            type={ButtonType.SPECIAL}
            title={StringsRepo.logout}
            onPress={onLogout}
            style={{ marginTop: 20 }}
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
