import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from "./asyncThunks";
import { UserType } from "../../models";

export interface IUserState {
  username?: string;
  email?: string;
  age?: number;
  isLoading?: boolean;
}

const initialState: IUserState = {
  username: "username",
  email: "email",
  age: 0,
  isLoading: false,
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    //TODO: Because this is "" and if on get FAIL is "NULL", we can fetch good the user data
    // In the MainNavigator.tsx it fetching twice, because the email is "" and then is "NULL"
    resetUser: (state) => {
      state.username = "";
      state.email = "";
      state.age = 0;
      state.isLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
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

    //Logout
    builder.addCase(logoutThunk.fulfilled, (state, action) => {
      state.username = "";
      state.email = "";
      state.age = 0;
      state.isLoading = false;
    });
    builder.addCase(logoutThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(logoutThunk.pending, (state) => {
      state.isLoading = true;
    });

    //Get User
    builder.addCase(
      getUserThunk.fulfilled,
      //TODO: PROBLEM CAN BE HERE
      (state, action: PayloadAction<UserType | undefined>) => {
        state.username = action.payload?.username;
        state.email = action.payload?.email;
        state.age = action.payload?.age;
        state.isLoading = false;
      },
    );
    builder.addCase(getUserThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getUserThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { resetUser, setIsLoading } = UserSlice.actions;
export default UserSlice.reducer;
