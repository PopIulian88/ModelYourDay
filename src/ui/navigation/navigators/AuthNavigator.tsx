import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen, Loading } from "../../screens";
import { Routes } from "../constats";
import { useSelector } from "react-redux";
import { IStore } from "../../../redux";

const Stack = createStackNavigator<AuthNavigatorProps>();

export type AuthNavigatorProps = {
  Auth: undefined;
};

export const AuthNavigator = () => {
  const { isLoading } = useSelector((state: IStore) => state.userReducer);

  return !isLoading ? (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        // @ts-ignore
        name={Routes.auth}
        component={AuthScreen}
      />
    </Stack.Navigator>
  ) : (
    <Loading />
  );
};
