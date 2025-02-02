import {
  completeChallengeModelThunk,
  createModelThunk,
  dailyChecksModelThunk,
  generateModelPhotoThunk,
  getModelThunk,
  regenerateDataModelThunk,
  updateModelPhotoThunk,
} from "./asyncThunks";
import { challengeType, ModelModel, RegenDataModel } from "../../models";
import { rootActions } from "../root";
import { Lottie, StringsRepo } from "../../resources";

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
    ).then(() => {
      dispatch(
        rootActions.showModal({
          title: StringsRepo.dataRegenerated,
          lottie: Lottie.aiBot,
          buttonTitle: StringsRepo.thanks,
          buttonAction: () => {
            dispatch(rootActions.hideModal());
          },
        }),
      );
    });
  };
};

export const updateModelPhoto = (
  currentModel: ModelModel | undefined,
  blob: Blob,
) => {
  return async (dispatch: any) => {
    return await dispatch(updateModelPhotoThunk({ currentModel, blob }));
  };
};

export const generateModelPhoto = (currentModel: ModelModel | undefined) => {
  return async (dispatch: any) => {
    return await dispatch(generateModelPhotoThunk({ currentModel }));
  };
};
