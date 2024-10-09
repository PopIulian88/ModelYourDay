import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, Loading } from "../../screens";
import { Routes } from "../constats";
import { IStore, useAppDispatch, userActions } from "../../../redux";
import React, { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { style } from "../../../styles";
import { StatusBar } from "react-native";
import { FIREBASE_AUTH } from "../../../backend";

const Stack = createStackNavigator<MainNavigatorParams>();

export type MainNavigatorParams = {
  Home: undefined;
};

export const MainNavigator = () => {
  const { isLoading, email } = useSelector(
    (state: IStore) => state.userReducer,
  );
  const { isModalVisible } = useSelector((state: IStore) => state.rootReducer);
  const [mainDataIsLoading, setMainDataIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  //TODO:(!RESOLVE THIS) Because of this, user data can't be realtime
  useEffect(() => {
    console.log("UID: ", FIREBASE_AUTH.currentUser?.uid);

    if (FIREBASE_AUTH.currentUser?.uid) {
      setMainDataIsLoading(true);
      dispatch(userActions.getUser()).then(() => setMainDataIsLoading(false));
    }
  }, [FIREBASE_AUTH.currentUser?.uid]);

  return !isLoading && !mainDataIsLoading ? (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          // @ts-ignore
          name={Routes.home}
          component={HomeScreen}
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
