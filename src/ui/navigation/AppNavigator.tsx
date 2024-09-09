import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, MainNavigator } from "./navigators";
import { useSelector } from "react-redux";
import { IStore } from "../../redux";
import { FIREBASE_AUTH } from "../../backend";

export const AppNavigator = () => {
  const rootState = useSelector((state: IStore) => state.rootReducer);

  const isLoggedIn = () => {
    //TODO: Add logic after implement the redux
    return rootState.isLoggedIn;
  };

  console.log("rootState.isLoggedIn", rootState.isLoggedIn);
  console.log("user logged in", FIREBASE_AUTH.currentUser?.email ?? "NU E");

  return (
    <NavigationContainer>
      {isLoggedIn() ? <MainNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
