import { createAsyncThunk } from "@reduxjs/toolkit";
import { ModelModel } from "../../models";
import { ref, set, get } from "firebase/database";
import { FIREBASE_AUTH, FIREBASE_REALTIME_DB } from "../../backend";
import { helper } from "../../helper";
import { userActions } from "../user";
import { StringsRepo } from "../../resources";

export const createModelThunk = createAsyncThunk(
  "model/createModel",
  async (model: ModelModel, { dispatch }) => {
    const currentUserId = FIREBASE_AUTH.currentUser?.uid;
    //Verify that we have a user id
    if (!currentUserId) {
      throw new Error("User not found: We don't have a user id");
    }

    const newModelId = currentUserId + Date.now();
    const lastUpdatedDate = new Date().toISOString().slice(0, 10);

    const newModel: ModelModel = {
      id: newModelId,
      name: model.name,
      description: model.description,
      image: model.image,
      currentActivity: model.currentActivity,
      strike: 0,
      motivation: model.motivation,
      meals: {
        monday: model.meals?.monday ?? {},
        tuesday: model.meals?.tuesday ?? {},
        wednesday: model.meals?.wednesday ?? {},
        thursday: model.meals?.thursday ?? {},
        friday: model.meals?.friday ?? {},
        saturday: model.meals?.saturday ?? {},
        sunday: model.meals?.sunday ?? {},
        lastUpdated: lastUpdatedDate,
      },
      freeTime: model.freeTime,
      training: {
        monday: model.training?.monday ?? {},
        tuesday: model.training?.tuesday ?? {},
        wednesday: model.training?.wednesday ?? {},
        thursday: model.training?.thursday ?? {},
        friday: model.training?.friday ?? {},
        saturday: model.training?.saturday ?? {},
        sunday: model.training?.sunday ?? {},
        lastUpdated: lastUpdatedDate,
      },
      challenges: {
        monday: model.challenges?.monday ?? {},
        tuesday: model.challenges?.tuesday ?? {},
        wednesday: model.challenges?.wednesday ?? {},
        thursday: model.challenges?.thursday ?? {},
        friday: model.challenges?.friday ?? {},
        saturday: model.challenges?.saturday ?? {},
        sunday: model.challenges?.sunday ?? {},
        lastUpdated: lastUpdatedDate,
      },
      challengesCompleted: {
        food: 0,
        gym: 0,
        freeTime: 0,
        fail: 0,
        lastUpdated: lastUpdatedDate,
      },
    };

    try {
      console.log("START creating new model");
      return await set(
        ref(FIREBASE_REALTIME_DB, "models/" + newModelId),
        newModel,
      )
        .then(async () => {
          console.log("Model created successfully");
          // Update the UserModelList
          return await dispatch(
            userActions.addModelToUser({
              id: newModelId,
              name: model.name,
              photo: model.image,
            }),
          )
            .then(
              // Set the new model as the selected one
              async () => {
                return await dispatch(userActions.setSelectedModel(newModelId));
              },
            )
            .then(() => {
              return newModel;
            })
            .catch(async (e) => {
              await helper.errorModal({ errorMessage: e, dispatch });
              return undefined;
            });
        })
        .catch(async (e) => {
          await helper.errorModal({ errorMessage: e, dispatch });
          return undefined;
        });
    } catch (e: any) {
      await helper.errorModal({ errorMessage: e, dispatch });
      return undefined;
    }
  },
);

export const getModelThunk = createAsyncThunk(
  "model/getModel",
  async (id: string, { dispatch }) => {
    console.log("Get model with id: ", id);
    try {
      let model: ModelModel | undefined = undefined;

      if (id === "") {
        await helper.errorModal({
          errorMessage: StringsRepo.error.modelIdIsEmpty,
          message: StringsRepo.getModelFailed,
          dispatch,
        });
        return undefined;
      }
      await get(ref(FIREBASE_REALTIME_DB, "models/" + id))
        .then(async (snapshot) => {
          if (snapshot.exists()) {
            model = {
              id: snapshot.val().id,
              name: snapshot.val().name,
              description: snapshot.val().description,
              image: snapshot.val().image,
              currentActivity: snapshot.val().currentActivity,
              strike: snapshot.val().strike,
              motivation: snapshot.val().motivation,
              meals: snapshot.val().meals,
              freeTime: snapshot.val().freeTime,
              training: snapshot.val().training,
              challenges: snapshot.val().challenges,
              challengesCompleted: snapshot.val().challengesCompleted,
            };
            return model;
          } else {
            await helper.errorModal({
              errorMessage: StringsRepo.error.modelNotFound,
              message: StringsRepo.getModelFailed,
              dispatch,
            });
            return undefined;
          }
        })
        .catch(async (e) => {
          await helper.errorModal({
            errorMessage: e,
            message: StringsRepo.getModelFailed,
            dispatch,
          });
          return undefined;
        });
      return model;
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: e,
        message: StringsRepo.getModelFailed,
        dispatch,
      });
      await dispatch(userActions.logout());
      return undefined;
    }
  },
);
