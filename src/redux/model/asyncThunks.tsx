import { createAsyncThunk } from "@reduxjs/toolkit";
import { ModelModel } from "../../models";
import { ref, set } from "firebase/database";
import { FIREBASE_AUTH, FIREBASE_REALTIME_DB } from "../../backend";
import { helper } from "../../helper";
import { userActions } from "../user";

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
      // TODO: Test send without non-required fields
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

    await set(ref(FIREBASE_REALTIME_DB, "models/" + newModelId), newModel)
      .then(async (response) => {
        console.log("Model created successfully", response);
        // Update the UserModelList
        await dispatch(userActions.addModelToUser(newModelId))
          .then(
            // Set the new model as the selected one
            async () =>
              await dispatch(userActions.setSelectedModel(newModelId)),
          )
          .then(() => {
            return newModel;
          })
          .catch((e) => {
            console.error(e);
            return undefined;
          });
      })
      .catch(async (e) => {
        console.error(e);
        await helper.basicError({ dispatch });
        return undefined;
      });
    return undefined;
  },
);

//TODO: Implement here
//
// export const getModelThunk = createAsyncThunk(
//   "model/getModel",
//   async (id: string, { dispatch }) => {
//     const response = await fetch(`https://api.example.com/model/${id}`);
//     const data = await response.json();
//     return data;
//   },
// );
