import { createSlice } from "@reduxjs/toolkit";
import { ModalModel } from "../../models";

export interface IRootState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  isModalVisible?: boolean;
  modalProps?: ModalModel | undefined;
}

const initialState: IRootState = {
  isLoggedIn: false,
  isLoading: false,
  isModalVisible: false,
  modalProps: undefined,
};

export const RootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    resetRoot: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    showModal: (state, action) => {
      state.isModalVisible = true;
      state.modalProps = action.payload;
    },
    hideModal: (state) => {
      state.isModalVisible = false;
      // state.modalProps = action.payload;
    },
  },
  extraReducers(builder) {},
});

export const { resetRoot, setIsLoggedIn, showModal, hideModal } =
  RootSlice.actions;

export default RootSlice.reducer;
