import UserReducer, { IUserState, setIsLoading } from "./UserSlice";
import {
  register,
  login,
  getUser,
  logout,
  addModelToUser,
  setSelectedModel,
  removeModelFromUser,
} from "./actions";

export { UserReducer, IUserState };

export const userActions = {
  // sync actions
  setIsLoading,
  // async actions
  register,
  login,
  getUser,
  logout,
  addModelToUser,
  setSelectedModel,
  removeModelFromUser,
};
