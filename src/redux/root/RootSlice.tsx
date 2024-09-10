import { createSlice } from "@reduxjs/toolkit";

export interface IRootState {
  isLoggedIn: boolean;
  isLoading?: boolean;
}

const initialState: IRootState = {
  isLoggedIn: false,
  isLoading: false,
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
  },
  extraReducers(builder) {},
});

export const { resetRoot, setIsLoggedIn } = RootSlice.actions;

export default RootSlice.reducer;
