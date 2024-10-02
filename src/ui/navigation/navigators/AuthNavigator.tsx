import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen, AuthVerification, Loading } from "../../screens";
import { Routes } from "../constats";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";
import { style } from "../../../styles";
import { StatusBar } from "react-native";
import { Fragment } from "react";
import { AuthVerificationModel } from "../../../models";

const Stack = createStackNavigator<AuthNavigatorProps>();

export type AuthNavigatorProps = {
  Auth: undefined;
  AuthVerification: AuthVerificationModel;
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
        <Stack.Screen
          // @ts-ignore
          name={Routes.authVerification}
          component={AuthVerification}
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
