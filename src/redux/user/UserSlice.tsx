import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./asyncThunks";

export interface IUserState {
  isLoading?: boolean;
}

const initialState: IUserState = {
  isLoading: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers(builder) {
    //Register
    builder.addCase(registerThunk.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(registerThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(registerThunk.pending, (state) => {
      state.isLoading = true;
    });

    //Login
    builder.addCase(loginThunk.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loginThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(loginThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { resetUser } = UserSlice.actions;
export default UserSlice.reducer;
