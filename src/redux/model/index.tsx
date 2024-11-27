import ModelReducer, { IModelState, setIsLoading } from "./ModelSlice";
import { createModel, getModel } from "./actions";

export { ModelReducer, IModelState };

export const modelActions = {
  // sync
  setIsLoading,
  // async
  createModel,
  getModel,
};
