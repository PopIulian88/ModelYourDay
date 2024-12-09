import { Animated, View } from "react-native";
import {
  AddonsBox,
  BackButton,
  Button,
  ModelCard,
  Text,
  TextInput,
} from "../../components";
import {
  NavigationProp,
  RouteProp,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { MainNavigatorParams } from "../../navigation/navigators/MainNavigator";
import { useState } from "react";
import { pageStyle } from "./pageStyle";
import { StringsRepo } from "../../../resources";
import {
  ButtonType,
  ModelCardType,
  TextInputType,
  TextType,
} from "../../../models";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Loading } from "../loading";
import ScrollView = Animated.ScrollView;
// Remove the cycle
import { Routes } from "../../navigation/constats";
import { IStore, modelActions, useAppDispatch } from "../../../redux";
import { useSelector } from "react-redux";

const FindYourModelScreen = () => {
  const { params } =
    useRoute<RouteProp<MainNavigatorParams, "FindYourModel">>();
  const { goBack, navigate } =
    useNavigation<NavigationProp<MainNavigatorParams>>();

  const { isModelLoading } = useSelector((state: IStore) => state.modelReducer);

  const { top, bottom } = useSafeAreaInsets();

  const dispatch = useAppDispatch();

  const [selectedModel, setSelectedModel] = useState(params);
  const [searchText, setSearchText] = useState("");
  const [addonSelected, setAddonSelected] = useState(-1);

  const onPressPrimary = async () => {
    if (!selectedModel) {
      //Find with AI flow (FIND YOUR MODEL)
      console.log(`Find with AI flow (${searchText})`);

      if (searchText !== "") {
      }

      // setSelectedModel(DefaultData.models[0]);
    } else {
      // Select default flow
      await dispatch(modelActions.createModel(selectedModel)).then(() => {
        // @ts-ignore
        navigate(Routes.home);
      });
    }
  };

  const onPressSecondary = () => {
    goBack();
  };

  const ModelFound = () => {
    return (
      <View style={pageStyle.modelFoundContainer}>
        <ModelCard
          type={ModelCardType.vertical}
          title={selectedModel?.name ?? "Something went wrong"}
          description={selectedModel?.description}
          image={selectedModel?.image}
          isDisabled={true}
        />
        <Button
          title={StringsRepo.findAgain}
          type={ButtonType.SECONDARY}
          onPress={onPressSecondary}
        />
      </View>
    );
  };

  return !isModelLoading ? (
    <View style={pageStyle.container}>
      <ScrollView
        style={pageStyle.scrollContainer}
        contentContainerStyle={[
          pageStyle.scrollContentContainer,
          { paddingTop: top, paddingBottom: Math.max(bottom + 90, 100) },
        ]}
      >
        {!selectedModel && <BackButton styles={pageStyle.backButton} />}
        <Text type={TextType.headingXL} style={pageStyle.title}>
          {selectedModel ? StringsRepo.goodChoice : StringsRepo.findYourModel}
        </Text>

        {!selectedModel ? (
          <View style={pageStyle.findModelContainer}>
            <TextInput
              type={TextInputType.SPECIAL}
              placeholder={StringsRepo.modelName}
              value={searchText}
              onChangeText={(r) => setSearchText(r)}
            />
            <AddonsBox
              addonSelected={addonSelected}
              setAddonSelected={setAddonSelected}
            />
          </View>
        ) : (
          <ModelFound />
        )}
      </ScrollView>
      <View
        style={[
          {
            position: "absolute",
            bottom: 0,
            width: "100%",
            alignItems: "center",
          },
          { paddingBottom: Math.max(bottom + 6, 16) },
        ]}
      >
        <Button
          title={selectedModel ? StringsRepo.select : StringsRepo.find}
          type={ButtonType.PRIMARY}
          onPress={onPressPrimary}
        />
      </View>
    </View>
  ) : (
    <Loading />
  );
};
export default FindYourModelScreen;
