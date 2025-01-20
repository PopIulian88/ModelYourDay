import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelModel } from "../../models";
import {
  completeChallengeModelThunk,
  createModelThunk,
  dailyChecksModelThunk,
  getModelThunk,
} from "./asyncThunks";

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
    resetModel: (state) => {
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

    //Complete Model Challenge
    builder.addCase(
      completeChallengeModelThunk.fulfilled,
      (state, action: PayloadAction<ModelModel | undefined>) => {
        if (action.payload !== undefined) {
          state.model = action.payload;
        }
        state.isModelLoading = false;
      },
    );
    builder.addCase(completeChallengeModelThunk.rejected, (state) => {
      state.isModelLoading = false;
    });
    builder.addCase(completeChallengeModelThunk.pending, (state) => {
      state.isModelLoading = true;
    });

    //Daily Model Checks
    builder.addCase(
      dailyChecksModelThunk.fulfilled,
      (state, action: PayloadAction<ModelModel | undefined>) => {
        if (action.payload !== undefined) {
          state.model = action.payload;
        }
        state.isModelLoading = false;
      },
    );
    builder.addCase(dailyChecksModelThunk.rejected, (state) => {
      state.isModelLoading = false;
    });
    builder.addCase(dailyChecksModelThunk.pending, (state) => {
      state.isModelLoading = true;
    });
  },
});
export const { resetModel, setIsLoading } = ModelSlice.actions;
export default ModelSlice.reducer;
