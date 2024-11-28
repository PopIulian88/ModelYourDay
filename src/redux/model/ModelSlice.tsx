import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelModel } from "../../models";
import { createModelThunk, getModelThunk } from "./asyncThunks";

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
        if (action.payload !== undefined) {
          state.model = action.payload;
        }
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
    builder.addCase(
      getModelThunk.fulfilled,
      (state, action: PayloadAction<ModelModel | undefined>) => {
        if (action.payload !== undefined) {
          state.model = action.payload;
        }
        state.isModelLoading = false;
      },
    );
    builder.addCase(getModelThunk.rejected, (state) => {
      state.isModelLoading = false;
    });
    builder.addCase(getModelThunk.pending, (state) => {
      state.isModelLoading = true;
    });
  },
});
export const { resetUser, setIsLoading } = ModelSlice.actions;
export default ModelSlice.reducer;
