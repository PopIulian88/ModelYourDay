import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, MainNavigator } from "./navigators";
import { useSelector } from "react-redux";
import { IStore } from "../../redux";

export const AppNavigator = () => {
  const rootState = useSelector((state: IStore) => state.rootReducer);

  const isLoggedIn = () => {
    //TODO: Add logic after implement the redux
    return rootState.isLoggedIn;
  };
  return (
    <NavigationContainer>
      {isLoggedIn() ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
