import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, MainNavigator } from "./navigators";

export const AppNavigator = () => {
  const isLoggedIn = () => {
    //TODO: Add logic after implement the redux
    return false;
  };
  return (
    <NavigationContainer>
      {isLoggedIn() ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
