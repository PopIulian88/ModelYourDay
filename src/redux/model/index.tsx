import ModelReducer, { IModelState, setIsLoading } from "./ModelSlice";
import { createModel } from "./actions";

export { ModelReducer, IModelState };

export const modelActions = {
  setIsLoading,
  createModel,
};
