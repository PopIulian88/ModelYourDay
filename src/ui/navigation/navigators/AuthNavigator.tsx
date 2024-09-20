import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen, Loading } from "../../screens";
import { Routes } from "../constats";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";
import { style } from "../../../styles";
import { StatusBar } from "react-native";
import { Fragment } from "react";

const Stack = createStackNavigator<AuthNavigatorProps>();

export type AuthNavigatorProps = {
  Auth: undefined;
};

export const AuthNavigator = () => {
  const { isLoading } = useSelector((state: IStore) => state.userReducer);
  const { isModalVisible } = useSelector((state: IStore) => state.rootReducer);

  return !isLoading ? (
    <Fragment>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen
          // @ts-ignore
          name={Routes.auth}
          component={AuthScreen}
        />
      </Stack.Navigator>
      <StatusBar
        backgroundColor={
          isModalVisible ? style.color.backgroundFade : style.color.sunshade
        }
      />
    </Fragment>
  ) : (
    <Loading />
  );
};
