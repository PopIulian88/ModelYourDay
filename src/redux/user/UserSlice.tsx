import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addModelToListThunk,
  getUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  setSelectedModelThunk,
} from "./asyncThunks";
import { SmallModelModel, UserType } from "../../models";

export interface IUserState {
  username?: string;
  email?: string;
  age?: number;
  isLoading?: boolean;
  isOnboardingComplete?: boolean;
  modelsList?: SmallModelModel[];
  selectedModel?: string; // Id of selected model
}

const initialState: IUserState = {
  username: "username",
  email: "email",
  age: 0,
  isLoading: false,
  isOnboardingComplete: false,
  modelsList: [],
  selectedModel: "",
};

const UserSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.username = "";
      state.email = "";
      state.age = 0;
      state.isLoading = false;
      state.isOnboardingComplete = false;
      state.modelsList = [];
      state.selectedModel = "";
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
      state.isOnboardingComplete = false;
      state.modelsList = [];
      state.selectedModel = "";
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
      (state, action: PayloadAction<UserType | undefined>) => {
        state.username = action.payload?.username;
        state.email = action.payload?.email;
        state.age = action.payload?.age;
        state.isLoading = false;
        state.isOnboardingComplete = action.payload?.isOnboardingComplete;
        state.modelsList = action.payload?.modelsList;
        state.selectedModel = action.payload?.selectedModel;
      },
    );
    builder.addCase(getUserThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getUserThunk.pending, (state) => {
      state.isLoading = true;
    });

    //Add new model to list
    builder.addCase(
      addModelToListThunk.fulfilled,
      (state, action: PayloadAction<SmallModelModel[] | undefined>) => {
        if (action?.payload !== undefined) {
          state.modelsList = action.payload;
        }
        state.isLoading = false;
      },
    );
    builder.addCase(addModelToListThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(addModelToListThunk.pending, (state) => {
      state.isLoading = true;
    });

    //Set selected model
    builder.addCase(
      setSelectedModelThunk.fulfilled,
      (state, action: PayloadAction<string | undefined>) => {
        if (action.payload !== undefined) {
          state.isOnboardingComplete = true;
          state.selectedModel = action.payload;
        }
        state.isLoading = false;
      },
    );
    builder.addCase(setSelectedModelThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(setSelectedModelThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { resetUser, setIsLoading } = UserSlice.actions;
export default UserSlice.reducer;
