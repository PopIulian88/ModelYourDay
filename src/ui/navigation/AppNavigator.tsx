import { NavigationContainer } from "@react-navigation/native";
import { AuthNavigator, MainNavigator } from "./navigators";
import { useSelector } from "react-redux";
import { IStore } from "../../redux";
import { style } from "../../styles";
import { StatusBar } from "react-native";

export const AppNavigator = () => {
  const rootState = useSelector((state: IStore) => state.rootReducer);
  const { isModalVisible } = useSelector((state: IStore) => state.rootReducer);

  const isLoggedIn = () => {
    return rootState.isLoggedIn;
  };

  return (
    <NavigationContainer>
      {isLoggedIn() ? <MainNavigator /> : <AuthNavigator />}
      <StatusBar
        backgroundColor={
          isModalVisible ? style.color.backgroundFade : style.color.background
        }
      />
    </NavigationContainer>
  );
};
