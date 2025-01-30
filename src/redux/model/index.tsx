import ModelReducer, {
  IModelState,
  setIsLoading,
  resetModel,
} from "./ModelSlice";
import {
  completeChallengeModel,
  createModel,
  dailyChecks,
  getModel,
  regenDataModel,
  updateModelPhoto,
} from "./actions";

export { ModelReducer, IModelState };

export const modelActions = {
  // sync
  setIsLoading,
  resetModel,
  // async
  createModel,
  getModel,
  completeChallengeModel,
  dailyChecks,
  regenDataModel,
  updateModelPhoto,
};
