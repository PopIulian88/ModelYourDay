import RootReducer, {
  setIsLoggedIn,
  RootSlice,
  IRootState,
  showModal,
  hideModal,
} from "./RootSlice";

export { RootReducer, RootSlice, IRootState };

export const rootActions = {
  setIsLoggedIn,
  showModal,
  hideModal,
};
