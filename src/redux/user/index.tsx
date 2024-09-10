import UserReducer, { IUserState } from "./UserSlice";
import { register, login } from "./actions";

export { UserReducer, IUserState };

export const userActions = {
  register,
  login,
};
