import {
  getUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./asyncThunks";
import { UserType } from "../../models";

export const register = (user: UserType, password: string) => {
  return async (dispatch: any) => {
    return await dispatch(registerThunk({ user, password }));
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    return await dispatch(loginThunk({ email, password }));
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    return await dispatch(logoutThunk());
  };
};

export const getUser = () => {
  return async (dispatch: any) => {
    return await dispatch(getUserThunk());
  };
};
