import { createStackNavigator } from "@react-navigation/stack";
import { AuthScreen } from "../../screens";
import { Routes } from "../constats";

const Stack = createStackNavigator<AuthNavigatorProps>();

export type AuthNavigatorProps = {
  Auth: undefined;
};

export const AuthNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        // @ts-ignore
        name={Routes.auth}
        component={AuthScreen}
      />
    </Stack.Navigator>
  );
};
