import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, MainNavigator } from "./navigators";
import { useSelector } from "react-redux";
import { IStore } from "../../redux";
import { WithExpoNotifications } from "../../wrappers";

export const AppNavigator = () => {
  const rootState = useSelector((state: IStore) => state.rootReducer);

  const isLoggedIn = () => {
    return rootState.isLoggedIn;
  };

  return (
    <NavigationContainer>
      <WithExpoNotifications>
        {isLoggedIn() ? <MainNavigator /> : <AuthNavigator />}
      </WithExpoNotifications>
    </NavigationContainer>
  );
};
