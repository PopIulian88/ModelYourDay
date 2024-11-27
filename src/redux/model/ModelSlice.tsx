import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelModel } from "../../models";
import { createModelThunk } from "./asyncThunks";

export interface IModelState {
  model?: ModelModel;
  isModelLoading?: boolean;
}

const initialState: IModelState = {
  model: undefined,
  isModelLoading: false,
};

const ModelSlice = createSlice({
  name: "model",
  initialState,
  reducers: {
    resetUser: (state) => {
      state.model = undefined;
      state.isModelLoading = false;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isModelLoading = action.payload;
    },
  },
  extraReducers(builder) {
    //Create new model
    builder.addCase(
      createModelThunk.fulfilled,
      (state, action: PayloadAction<ModelModel | undefined>) => {
        action.payload !== undefined && (state.model = action.payload);
        state.isModelLoading = false;
      },
    );
    builder.addCase(createModelThunk.rejected, (state) => {
      state.isModelLoading = false;
    });
    builder.addCase(createModelThunk.pending, (state) => {
      state.isModelLoading = true;
    });

    //Get Model
    // TODO: Add this
    // builder.addCase(
    //   getModelThunk.fulfilled,
    //   (state, action: PayloadAction<ModelModel | undefined>) => {
    //     //TODO: Add the model to the state
    //     //
    //     // state.username = action.payload?.username;
    //     // state.email = action.payload?.email;
    //     // state.age = action.payload?.age;
    //     // state.isLoading = false;
    //     // state.isOnboardingComplete = action.payload?.isOnboardingComplete;
    //     // state.modelsList = action.payload?.modelsList;
    //     // state.selectedModel = action.payload?.selectedModel;
    //     console.log("Loading complet");
    //     state.isModelLoading = false;
    //   },
    // );
    // builder.addCase(getUserThunk.rejected, (state) => {
    //   state.isModelLoading = false;
    // });
    // builder.addCase(getUserThunk.pending, (state) => {
    //   state.isModelLoading = true;
    // });
  },
});
export const { resetUser, setIsLoading } = ModelSlice.actions;
export default ModelSlice.reducer;
