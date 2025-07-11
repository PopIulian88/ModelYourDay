import {
  addModelToListThunk,
  getUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
  removeModelFromListThunk,
  setSelectedModelThunk,
  signInGoogleThunk,
  updateModelsListThunk,
  updateNameAndAgeUserThunk,
} from "./asyncThunks";
import { SmallModelModel, UserType } from "../../models";

export const register = (user: UserType, password: string) => {
  return async (dispatch: any) => {
    return await dispatch(registerThunk({ user, password }));
  };
};

export const singInWithGoogle = () => {
  return async (dispatch: any) => {
    return await dispatch(signInGoogleThunk());
  };
};

export const login = (email: string, password: string) => {
  return async (dispatch: any) => {
    return await dispatch(loginThunk({ email, password }));
  };
};

export const logout = () => {
  return async (dispatch: any) => {
    return await dispatch(logoutThunk());
  };
};

export const getUser = () => {
  return async (dispatch: any) => {
    return await dispatch(getUserThunk());
  };
};

export const addModelToUser = (modelId: SmallModelModel) => {
  return async (dispatch: any) => {
    return await dispatch(addModelToListThunk(modelId));
  };
};

export const removeModelFromUser = (
  id: string,
  modelList: SmallModelModel[],
) => {
  return async (dispatch: any) => {
    return await dispatch(removeModelFromListThunk({ id, modelList }));
  };
};

export const setSelectedModel = (modelId: string) => {
  return async (dispatch: any) => {
    return await dispatch(setSelectedModelThunk(modelId));
  };
};

export const updateNameAndAgeUser = (username: string, age: number) => {
  return async (dispatch: any) => {
    return await dispatch(
      updateNameAndAgeUserThunk({
        username,
        age,
      }),
    );
  };
};

export const updateModelsList = (newModelData: SmallModelModel) => {
  return async (dispatch: any) => {
    return await dispatch(
      updateModelsListThunk({
        newModelData,
      }),
    );
  };
};
