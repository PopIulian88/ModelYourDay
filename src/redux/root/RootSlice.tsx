import { createSlice } from "@reduxjs/toolkit";

export interface IRootSlice {
  isLoggedIn: boolean;
  isLoading?: boolean;
}

const initialState: IRootSlice = {
  isLoggedIn: false,
  isLoading: false,
};

export const RootSlice = createSlice({
  name: "root",
  initialState,
  reducers: {
    resetRoot: (state) => {
      state.isLoggedIn = false;
    },
    setIsLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
  },
  extraReducers(builder) {
    // builder.addCase(getEX.fulfilled, (state, action) => {
    //   state.exValue = action.payload;
    //   state.isLoading = false;
    // });
    // builder.addCase(getEX.rejected, (state) => {
    //   state.isLoading = false;
    // });
    // builder.addCase(getEX.pending, (state) => {
    //   state.isLoading = true;
    // });
  },
});

export const { resetRoot, setIsLoggedIn } = RootSlice.actions;

export default RootSlice.reducer;
