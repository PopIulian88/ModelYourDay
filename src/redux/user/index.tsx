import UserReducer, { IUserState } from "./UserSlice";
import { register, login, getUser, logout } from "./actions";

export { UserReducer, IUserState };

export const userActions = {
  register,
  login,
  getUser,
  logout,
};
