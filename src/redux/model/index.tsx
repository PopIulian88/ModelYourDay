import ModelReducer, {
  IModelState,
  setIsLoading,
  resetModel,
} from "./ModelSlice";
import { createModel, getModel } from "./actions";

export { ModelReducer, IModelState };

export const modelActions = {
  // sync
  setIsLoading,
  resetModel,
  // async
  createModel,
  getModel,
};
