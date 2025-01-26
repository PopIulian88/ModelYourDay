import { useEffect } from "react";
import { rootActions, useAppDispatch } from "../redux";
import auth from "@react-native-firebase/auth";

export const AuthWrapper = ({ children }: { children: any | null }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth().onAuthStateChanged((user) => {
      dispatch(rootActions.setIsLoggedIn(user !== null));
    });
  }, []);

  return children || null;
};

export default AuthWrapper;
