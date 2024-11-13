import { createStackNavigator } from "@react-navigation/stack";
import {
  ChartScreen,
  ChooseFirstModelScreen,
  FindYourModelScreen,
  HomeScreen,
  Loading,
  ModelScreen,
  ProfileScreen,
} from "../../screens";
import { Routes } from "../constats";
import { IStore, useAppDispatch, userActions } from "../../../redux";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { style } from "../../../styles";
import { StatusBar } from "react-native";
import { FIREBASE_AUTH } from "../../../backend";
import { ChartModel, ModelModel } from "../../../models";

const Stack = createStackNavigator<MainNavigatorParams>();

export type MainNavigatorParams = {
  Home: undefined;
  ChooseFirstModel: undefined;
  FindYourModel: ModelModel | undefined;
  Profile: undefined;
  Chart: ChartModel | undefined;
  Model: undefined;
};

export const MainNavigator = () => {
  const { isLoading, email } = useSelector(
    (state: IStore) => state.userReducer,
  );
  const { isModalVisible } = useSelector((state: IStore) => state.rootReducer);
  const [mainDataIsLoading, setMainDataIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setMainDataIsLoading(true);
    return FIREBASE_AUTH.onAuthStateChanged(async (user: any | null) => {
      if (user) {
        await dispatch(userActions.getUser()).then(() =>
          setMainDataIsLoading(false),
        );
      }
    });
  }, []);

  //TODO: Implement the onboarding check
  const isOnboardingCompleted = () => {
    return true;
  };

  return !isLoading && !mainDataIsLoading ? (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!isOnboardingCompleted() && (
          <Stack.Screen
            // @ts-ignore
            name={Routes.chooseFirstModel}
            component={ChooseFirstModelScreen}
          />
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
