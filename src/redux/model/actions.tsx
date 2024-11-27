import { createModelThunk } from "./asyncThunks";
import { ModelModel } from "../../models";

export const createModel = (model: ModelModel) => {
  return async (dispatch: any) => {
    return await dispatch(createModelThunk(model));
  };
};
