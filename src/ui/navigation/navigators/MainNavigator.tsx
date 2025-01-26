import { createStackNavigator } from "@react-navigation/stack";
import {
  AdditionalUserInfoScreen,
  ChartScreen,
  ChooseFirstModelScreen,
  FindYourModelScreen,
  HomeScreen,
  Loading,
  ModelFoodScreen,
  ModelGymScreen,
  ModelScreen,
  ProfileScreen,
} from "../../screens";
import { Routes } from "../constats";
import {
  IStore,
  modelActions,
  useAppDispatch,
  userActions,
} from "../../../redux";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { style } from "../../../styles";
import { StatusBar } from "react-native";
import { ChartModel, ModelModel } from "../../../models";

const Stack = createStackNavigator<MainNavigatorParams>();

export type MainNavigatorParams = {
  AdditionalUserInfo: undefined;
  Home: undefined;
  ChooseFirstModel: undefined;
  FindYourModel: ModelModel | undefined;
  Profile: undefined;
  Chart: ChartModel | undefined;
  Model: undefined;
  ModelFood: undefined;
  ModelGym: undefined;
};

export const MainNavigator = () => {
  const { isLoading, isOnboardingComplete, age, username } = useSelector(
    (state: IStore) => state.userReducer,
  );
  const { isModelLoading } = useSelector((state: IStore) => state.modelReducer);
  const { isModalVisible } = useSelector((state: IStore) => state.rootReducer);
  const [mainDataIsLoading, setMainDataIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setMainDataIsLoading(true);
    // IMPORTANT: This is the old way to get the user data
    // (if something goes wrong, use this way)

    // auth().onAuthStateChanged(async (user: any | null) => {
    //  if (user) {

    //Get User data
    dispatch(userActions.getUser()).then(async (userData) => {
      if (
        userData?.payload?.isOnboardingComplete &&
        userData?.payload?.selectedModel
      ) {
        // Get Selected Model data
        await dispatch(
          modelActions.getModel(userData?.payload?.selectedModel ?? ""),
        )
          .then(async (modelData) => {
            // Prepare the date for the new day
            console.log("ModelData: ", modelData?.payload?.id);

            await dispatch(modelActions.dailyChecks(modelData?.payload));

            setMainDataIsLoading(false);
          })
          .catch((e) => {
            console.error("FAIL to getModel on MainNavigator: ", e);
            setMainDataIsLoading(false);
          });
      } else {
        setMainDataIsLoading(false);
      }
    });
    //   }
    // });
  }, []);

  const isOnboardingCompleted = () => {
    return isOnboardingComplete;
  };

  return !isLoading && !isModelLoading && !mainDataIsLoading ? (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isOnboardingCompleted() && (
          <>
            {/*Add this only if the user is loged in with google*/}
            {(age === 0 || username === "Unknown") && (
              <Stack.Screen
                // @ts-ignore
                name={Routes.additionalUserInfo}
                component={AdditionalUserInfoScreen}
              />
            )}
            <Stack.Screen
              // @ts-ignore
              name={Routes.chooseFirstModel}
              component={ChooseFirstModelScreen}
            />
          </>
        )}
        <Stack.Screen
          // @ts-ignore
          name={Routes.home}
          component={HomeScreen}
        />
        <Stack.Screen
          // @ts-ignore
          name={Routes.profile}
          component={ProfileScreen}
        />
        <Stack.Screen
          // @ts-ignore
          name={Routes.findYourModel}
          component={FindYourModelScreen}
        />
        <Stack.Screen
          // @ts-ignore
          name={Routes.chart}
          component={ChartScreen}
        />
        <Stack.Screen
          // @ts-ignore
          name={Routes.model}
          component={ModelScreen}
        />
        <Stack.Screen
          // @ts-ignore
          name={Routes.modelFood}
          component={ModelFoodScreen}
        />
        <Stack.Screen
          // @ts-ignore
          name={Routes.modelGym}
          component={ModelGymScreen}
        />
      </Stack.Navigator>
      <StatusBar
        backgroundColor={
          isModalVisible ? style.color.backgroundFade : style.color.background
        }
      />
    </Fragment>
  ) : (
    <Loading />
  );
};
