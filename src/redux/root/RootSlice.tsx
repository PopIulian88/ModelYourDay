import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModalModel, UserType } from "../../models";
import { getUsersThunk } from "./asyncThunks";

export interface IRootState {
  isLoggedIn: boolean;
  isLoading?: boolean;
  isModalVisible?: boolean;
  modalProps?: ModalModel | undefined;
  users?: UserType[] | undefined;
}

const initialState: IRootState = {
  isLoggedIn: false,
  isLoading: false,
  isModalVisible: false,
  modalProps: undefined,
  users: undefined,
};

export const RootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    resetRoot: (state) => {
      state.isLoggedIn = false;
      state.isLoading = false;
      state.isModalVisible = false;
      state.modalProps = undefined;
      state.users = undefined;
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
  extraReducers(builder) {
    //Get Users
    builder.addCase(
      getUsersThunk.fulfilled,
      (state, action: PayloadAction<UserType[]>) => {
        state.users = action.payload;
        state.isLoading = false;
      },
    );
    builder.addCase(getUsersThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getUsersThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { resetRoot, setIsLoggedIn, showModal, hideModal } =
  RootSlice.actions;

export default RootSlice.reducer;
