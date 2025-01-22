import {
  completeChallengeModelThunk,
  createModelThunk,
  dailyChecksModelThunk,
  getModelThunk,
  regenerateDataModelThunk,
} from "./asyncThunks";
import { challengeType, ModelModel, RegenDataModel } from "../../models";

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

export const completeChallengeModel = (
  currentModel: ModelModel | undefined,
  challengeType: challengeType,
) => {
  return async (dispatch: any) => {
    return await dispatch(
      completeChallengeModelThunk({ currentModel, challengeType }),
    );
  };
};
export const dailyChecks = (currentModel: ModelModel | undefined) => {
  return async (dispatch: any) => {
    return await dispatch(dailyChecksModelThunk({ currentModel }));
  };
};

export const regenDataModel = (
  currentModel: ModelModel | undefined,
  regenDataType: RegenDataModel,
) => {
  return async (dispatch: any) => {
    return await dispatch(
      regenerateDataModelThunk({ currentModel, regenDataType }),
    );
  };
};
