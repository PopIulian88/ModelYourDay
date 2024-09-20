import UserReducer, { IUserState } from "./UserSlice";
import { register, login, getUser, logout } from "./actions";
import { setIsLoading } from "./UserSlice";

export { UserReducer, IUserState };

export const userActions = {
  setIsLoading,
  register,
  login,
  getUser,
  logout,
};
