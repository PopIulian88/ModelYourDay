import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen, Loading } from "../../screens";
import { Routes } from "../constats";
import { IStore, useAppDispatch, userActions } from "../../../redux";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Stack = createStackNavigator<MainNavigatorParams>();

export type MainNavigatorParams = {
  Home: undefined;
};

export const MainNavigator = () => {
  const { isLoading, email } = useSelector(
    (state: IStore) => state.userReducer,
  );
  const [mainDataIsLoading, setMainDataIsLoading] = useState(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    setMainDataIsLoading(true);
    dispatch(userActions.getUser()).then(() => setMainDataIsLoading(false));
  }, [email]);

  return !isLoading && !mainDataIsLoading ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        // @ts-ignore
        name={Routes.home}
        component={HomeScreen}
      />
    </Stack.Navigator>
  ) : (
    <Loading />
  );
};
