import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  addModelToListThunk,
  getUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  removeModelFromListThunk,
  setSelectedModelThunk,
  signInGoogleThunk,
  updateModelsListThunk,
  updateNameAndAgeUserThunk,
} from "./asyncThunks";
import { SmallModelModel, UserType } from "../../models";

export interface IUserState {
  id?: string;
  isConnectedWithGoogle?: boolean;
  username?: string;
  email?: string;
  age?: number;
  isLoading?: boolean;
  isOnboardingComplete?: boolean;
  modelsList?: SmallModelModel[];
  selectedModel?: string; // Id of selected model
}

const initialState: IUserState = {
  id: "",
  isConnectedWithGoogle: false,
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
      state.id = "";
      state.isConnectedWithGoogle = false;
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

    //Sign in with google
    builder.addCase(signInGoogleThunk.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(signInGoogleThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(signInGoogleThunk.pending, (state) => {
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
      state.id = "";
      state.isConnectedWithGoogle = false;
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
        state.id = action.payload?.id;
        state.isConnectedWithGoogle = action.payload?.isConnectedWithGoogle;
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

    //Update name and age model
    builder.addCase(
      updateNameAndAgeUserThunk.fulfilled,
      (
        state,
        action: PayloadAction<{ username: string; age: number } | undefined>,
      ) => {
        if (action.payload !== undefined) {
          state.username = action.payload.username;
          state.age = action.payload.age;
        }
        state.isLoading = false;
      },
    );
    builder.addCase(updateNameAndAgeUserThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateNameAndAgeUserThunk.pending, (state) => {
      state.isLoading = true;
    });

    //Remove model to list
    builder.addCase(
      removeModelFromListThunk.fulfilled,
      (state, action: PayloadAction<SmallModelModel[] | undefined>) => {
        if (action?.payload !== undefined) {
          state.modelsList = action.payload;
        }
        state.isLoading = false;
      },
    );
    builder.addCase(removeModelFromListThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(removeModelFromListThunk.pending, (state) => {
      state.isLoading = true;
    });

    //Update modelList model
    builder.addCase(
      updateModelsListThunk.fulfilled,
      (state, action: PayloadAction<SmallModelModel[] | undefined>) => {
        if (action.payload !== undefined) {
          state.modelsList = action.payload;
        }
        state.isLoading = false;
      },
    );
    builder.addCase(updateModelsListThunk.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateModelsListThunk.pending, (state) => {
      state.isLoading = true;
    });
  },
});

export const { resetUser, setIsLoading } = UserSlice.actions;
export default UserSlice.reducer;
