import { createModelThunk, getModelThunk } from "./asyncThunks";
import { ModelModel } from "../../models";

export const createModel = (model: ModelModel) => {
  return async (dispatch: any) => {
    return await dispatch(createModelThunk(model));
  };
};

export const getModel = (id: string) => {
  return async (dispatch: any) => {
    return await dispatch(getModelThunk(id));
  };
};
