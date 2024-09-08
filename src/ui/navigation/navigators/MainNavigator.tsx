import { createStackNavigator } from "@react-navigation/stack";
import { HomeScreen } from "../../screens";
import { Routes } from "../constats";

const Stack = createStackNavigator<MainNavigatorParams>();

export type MainNavigatorParams = {
  Home: undefined;
};

export const MainNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        // @ts-ignore
        name={Routes.home}
        component={HomeScreen}
      />
    </Stack.Navigator>
  );
};
