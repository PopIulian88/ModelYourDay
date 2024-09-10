import { loginThunk, registerThunk } from "./asyncThunks";

export const register = (email: string, password: string) => {
  return async (dispatch: any) => {
    return await dispatch(registerThunk({ email, password }));
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    return await dispatch(loginThunk({ email, password }));
  };
};
