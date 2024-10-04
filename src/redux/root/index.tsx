import RootReducer, {
  setIsLoggedIn,
  RootSlice,
  IRootState,
  showModal,
  hideModal,
} from "./RootSlice";
import { getUsers } from "./actions";

export { RootReducer, RootSlice, IRootState };

export const rootActions = {
  setIsLoggedIn,
  showModal,
  hideModal,
  getUsers,
};
