import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ModelModel } from "../../models";
import {
  completeChallengeModelThunk,
  createModelThunk,
  dailyChecksModelThunk,
  getModelThunk,
  regenerateDataModelThunk,
  updateModelPhotoThunk,
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

    //Regenerate Model Data
    builder.addCase(
      regenerateDataModelThunk.fulfilled,
      (state, action: PayloadAction<ModelModel | undefined>) => {
        if (action.payload !== undefined) {
          state.model = action.payload;
        }
        state.isModelLoading = false;
      },
    );
    builder.addCase(regenerateDataModelThunk.rejected, (state) => {
      state.isModelLoading = false;
    });
    builder.addCase(regenerateDataModelThunk.pending, (state) => {
      state.isModelLoading = true;
    });

    //Update Model photo
    builder.addCase(
      updateModelPhotoThunk.fulfilled,
      (state, action: PayloadAction<ModelModel | undefined>) => {
        if (action.payload !== undefined) {
          state.model = action.payload;
        }
        state.isModelLoading = false;
      },
    );
    builder.addCase(updateModelPhotoThunk.rejected, (state) => {
      state.isModelLoading = false;
    });
    builder.addCase(updateModelPhotoThunk.pending, (state) => {
      state.isModelLoading = true;
    });
  },
});
export const { resetModel, setIsLoading } = ModelSlice.actions;
export default ModelSlice.reducer;
