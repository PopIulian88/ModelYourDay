import { getUsersThunk } from "./asyncThunks";

export const getUsers = () => {
  return async (dispatch: any) => {
    return await dispatch(getUsersThunk());
  };
};
