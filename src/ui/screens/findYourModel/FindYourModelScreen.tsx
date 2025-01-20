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
import {
  IStore,
  modelActions,
  rootActions,
  useAppDispatch,
} from "../../../redux";
import { useSelector } from "react-redux";
import { AI } from "../../../backend/ai";
import { modelHelper } from "../../../helper";

const FindYourModelScreen = () => {
  const { params } =
    useRoute<RouteProp<MainNavigatorParams, "FindYourModel">>();
  const { goBack, navigate } =
    useNavigation<NavigationProp<MainNavigatorParams>>();

  const { modelsList } = useSelector((state: IStore) => state.userReducer);
  const { isModelLoading } = useSelector((state: IStore) => state.modelReducer);

  const { top, bottom } = useSafeAreaInsets();

  const dispatch = useAppDispatch();

  const [isFindingModel, setIsFindingModel] = useState(false);
  const [selectedModel, setSelectedModel] = useState(params);
  const [searchText, setSearchText] = useState("");
  const [addonSelected, setAddonSelected] = useState(-1);

  const onPressPrimary = async () => {
    if (!selectedModel) {
      //Find with AI flow (FIND YOUR MODEL)
      console.log(`Find with AI flow (${searchText})`);

      if (searchText !== "") {
        setIsFindingModel(true);
        // Verify if the model name is correct
        await AI.verifyNameCorrectness(searchText).then(
          async (newModelName) => {
            console.log("CORRECT NAME: ", newModelName);
            if (newModelName == "FAIL") {
              setIsFindingModel(false);
              dispatch(
                rootActions.showModal({
                  error: true,
                  title: StringsRepo.error.modelNotFound,
                }),
              );
              return;
            }

            //Verify if the model name is not already used for this user
            let alreadyExists = false;

            modelsList?.forEach((model) => {
              if (model.name === newModelName) {
                setIsFindingModel(false);
                dispatch(
                  rootActions.showModal({
                    error: true,
                    title: StringsRepo.error.modelAlreadyExists,
                  }),
                );
                alreadyExists = true;
                return;
              }
            });

            //Create the new model data if is not exists yet
            !alreadyExists &&
              (await modelHelper
                .createNewModel(newModelName)
                .then(async (newModelData) => {
                  // console.log("NEW MODEL DATA: ", newModelData);
                  //Add the new model to the user's list and db
                  await dispatch(
                    modelActions.createModel({
                      id: "Unknown",
                      name: newModelName,
                      description: newModelData.description ?? "Unknown",
                      image: 0, // This should be generated in the future
                      currentActivity:
                        newModelData.currentActivity ?? "Unknown",
                      strike: 0, // Initial value: 0
                      motivation: newModelData.motivation,
                      meals: newModelData.meals,
                      freeTime: newModelData.freeTime,
                      training: newModelData.training,
                      challenges: newModelData.challenges,
                      challengesCompleted: {
                        // This will not be generated
                        food: 0,
                        gym: 0,
                        freeTime: 0,
                        fail: 0,
                        lastUpdated: new Date().toISOString().slice(0, 10),
                      },
                      currentChallenge: {
                        // This will not be generated
                        food: 0,
                        gym: 0,
                        freeTime: 0,
                      },
                    }),
                  ).then(() => {
                    setIsFindingModel(false);
                  });
                }));
            setIsFindingModel(false);
          },
        );
      }
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

  return !isModelLoading && !isFindingModel ? (
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
