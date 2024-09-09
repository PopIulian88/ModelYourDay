import { FIREBASE_AUTH } from "../backend";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { rootActions, useAppDispatch } from "../redux";

export const AuthWrapper = ({ children }: { children: any | null }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      dispatch(rootActions.setIsLoggedIn(user !== null));
    });
  }, []);

  return children || null;
};

export default AuthWrapper;
