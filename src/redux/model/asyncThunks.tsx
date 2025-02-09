import { createAsyncThunk } from "@reduxjs/toolkit";
import { challengeType, ModelModel, RegenDataModel } from "../../models";
import { get, ref, set, update } from "firebase/database";
import {
  AI,
  FIREBASE_APP,
  FIREBASE_REALTIME_DB,
  FIREBASE_STORAGE_PHOTOS_MODEL_PATH,
} from "../../backend";
import { helper, modelHelper } from "../../helper";
import { userActions } from "../user";
import { StringsRepo } from "../../resources";
import auth from "@react-native-firebase/auth";
import firebase from "firebase/compat";

export const createModelThunk = createAsyncThunk(
  "model/createModel",
  async (model: ModelModel, { dispatch }) => {
    const currentUserId = auth().currentUser?.uid;

    console.log("Creating new model...");

    //Verify that we have a user id
    if (!currentUserId) {
      throw new Error("User not found: We don't have a user id");
    }

    const newModelId = currentUserId + Date.now();
    const lastUpdatedDate = new Date().toISOString().slice(0, 10);

    let image: string | number = model.image;

    // Upload the image to Firebase Storage
    const storageRef = FIREBASE_APP.storage(
      "gs://modelyourday.firebasestorage.app",
    )
      .ref()
      .child(`${FIREBASE_STORAGE_PHOTOS_MODEL_PATH}${newModelId}.jpg`);

    // Image from the app
    if (typeof model.image === "number") {
      const blob: Blob = await modelHelper.getImageFromApp(model.image);

      await storageRef.put(blob).then(async (snapshot) => {
        image = await snapshot.ref.getDownloadURL();
      });
    }
    // TODO: COMMENT THIS TO NOT GENERATE THE IMAGE
    // Generated image
    // if (typeof model.image === "string") {
    //   await AI.generateModelImage(model.name).then(async (imageUri) => {
    //     if (!!imageUri) {
    //       console.log("Image generated", imageUri);
    //       await helper
    //         .imageUriToBlob(imageUri)
    //         .then(async (blob: Blob | undefined) => {
    //           if (blob) {
    //             await storageRef.put(blob).then(async (snapshot) => {
    //               image = await snapshot.ref.getDownloadURL();
    //             });
    //           }
    //         });
    //     }
    //   });
    // }

    const newModel: ModelModel = {
      id: newModelId,
      name: model.name,
      description: model.description,
      image: image,
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
        food: model.challenges?.food ?? "Unknown",
        gym: model.challenges?.gym ?? "Unknown",
        freeTime: model.challenges?.freeTime ?? "Unknown",
      },
      challengesCompleted: {
        food: 0,
        gym: 0,
        freeTime: 0,
        fail: 0,
        lastUpdated: lastUpdatedDate,
      },
      currentChallenge: {
        food: 0,
        gym: 0,
        freeTime: 0,
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
              photo: image,
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
          let image = snapshot.val().image;

          if (snapshot.exists()) {
            // Get the image from Firebase Storage
            const fsr: firebase.storage.Reference = FIREBASE_APP.storage(
              "gs://modelyourday.firebasestorage.app",
            ).ref(
              `${FIREBASE_STORAGE_PHOTOS_MODEL_PATH}${snapshot.val().id}.jpg`,
            );

            await fsr
              .getDownloadURL()
              .then((url) => {
                image = url;
              })
              .catch((e) => {
                console.log(
                  "Error getting image from Firebase Storage(model could not have a image yet): ",
                  e,
                );
              });

            model = {
              id: snapshot.val().id,
              name: snapshot.val().name,
              description: snapshot.val().description,
              image: image,
              currentActivity: snapshot.val().currentActivity,
              strike: snapshot.val().strike,
              motivation: snapshot.val().motivation,
              meals: snapshot.val().meals,
              freeTime: snapshot.val().freeTime,
              training: snapshot.val().training,
              challenges: snapshot.val().challenges,
              challengesCompleted: snapshot.val().challengesCompleted,
              currentChallenge: snapshot.val().currentChallenge,
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

export const completeChallengeModelThunk = createAsyncThunk(
  "model/completeChallengeModel",

  async (
    payload: {
      currentModel: ModelModel | undefined;
      challengeType: challengeType;
    },
    { dispatch },
  ) => {
    if (!payload.currentModel) {
      await helper.errorModal({
        errorMessage: StringsRepo.error.modelNotFound,
        dispatch,
      });
      return undefined;
    }
    console.log(`Complete ${payload.challengeType} challenge in progress...`);

    try {
      const newModel: ModelModel = {
        ...payload.currentModel,
        challengesCompleted: {
          gym:
            payload.challengeType === challengeType.GYM
              ? payload.currentModel.challengesCompleted.gym + 1
              : payload.currentModel.challengesCompleted.gym,
          food:
            payload.challengeType === challengeType.FOOD
              ? payload.currentModel.challengesCompleted.food + 1
              : payload.currentModel.challengesCompleted.food,
          freeTime:
            payload.challengeType === challengeType.FREE_TIME
              ? payload.currentModel.challengesCompleted.freeTime + 1
              : payload.currentModel.challengesCompleted.freeTime,
          fail: payload.currentModel.challengesCompleted.fail,
          lastUpdated: new Date().toISOString().slice(0, 10),
        },
        currentChallenge: {
          gym:
            payload.challengeType === challengeType.GYM
              ? payload.currentModel.currentChallenge.gym + 1
              : payload.currentModel.currentChallenge.gym,
          food:
            payload.challengeType === challengeType.FOOD
              ? payload.currentModel.currentChallenge.food + 1
              : payload.currentModel.currentChallenge.food,
          freeTime:
            payload.challengeType === challengeType.FREE_TIME
              ? payload.currentModel.currentChallenge.freeTime + 1
              : payload.currentModel.currentChallenge.freeTime,
        },
      };

      return await update(
        ref(FIREBASE_REALTIME_DB, "models/" + newModel.id),
        newModel,
      )
        .then(() => {
          return newModel;
        })
        .catch(async (e) => {
          await helper.errorModal({
            errorMessage: `${StringsRepo.error.completeChallengeFail}: ${e}`,
            dispatch,
          });
          return undefined;
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.completeChallengeFail}: ${e}`,
        dispatch,
      });
      return undefined;
    }
  },
);

export const dailyChecksModelThunk = createAsyncThunk(
  "model/dailyChecksModel",

  async (
    payload: {
      currentModel: ModelModel | undefined;
    },
    { dispatch },
  ) => {
    if (!payload.currentModel) {
      await helper.errorModal({
        errorMessage: StringsRepo.error.modelNotFound,
        dispatch,
      });
      return undefined;
    }
    console.log(`Daily verification on ${payload.currentModel.id}...`);

    try {
      // 1) To make a day pass comment this
      if (
        payload.currentModel.challengesCompleted.lastUpdated ===
        new Date().toISOString().slice(0, 10)
      ) {
        console.log("Already checked for today");
        return undefined;
      }

      const lastChallengeDate = new Date(
        payload.currentModel.challengesCompleted.lastUpdated,
      );
      const currentDate = new Date();

      // 2) To make a day pass uncomment this
      // currentDate.setDate(currentDate.getDate() + 1);

      const diffInDays =
        // @ts-ignore
        Math.floor((currentDate - lastChallengeDate) / (1000 * 60 * 60 * 24));

      console.log("Days since last check: ", diffInDays);

      const completedChallenges =
        payload.currentModel.currentChallenge.food +
        payload.currentModel.currentChallenge.gym +
        payload.currentModel.currentChallenge.freeTime;

      let fail =
        payload.currentModel.challengesCompleted.fail +
        (3 - completedChallenges);

      let strike =
        completedChallenges > 0 ? payload.currentModel.strike + 1 : 0;

      // If is more then 1 day
      //We add 3 fails for each day that has passed, because the user didn't complete the 3 daily challenges
      if (diffInDays > 1) {
        fail += 3 * (diffInDays - 1);
        strike = 0;
      }

      const newChallenges = await AI.generateModelChallenges(
        payload.currentModel.name,
      );

      const newModel: ModelModel = {
        ...payload.currentModel,
        strike: strike,
        challengesCompleted: {
          gym: payload.currentModel.challengesCompleted.gym,
          food: payload.currentModel.challengesCompleted.food,
          freeTime: payload.currentModel.challengesCompleted.freeTime,
          fail: fail,
          lastUpdated: new Date().toISOString().slice(0, 10),
        },
        currentChallenge: {
          gym: 0,
          food: 0,
          freeTime: 0,
        },
        challenges: newChallenges,
      };

      return await update(
        ref(FIREBASE_REALTIME_DB, "models/" + newModel.id),
        newModel,
      )
        .then(() => {
          return newModel;
        })
        .catch(async (e) => {
          await helper.errorModal({
            errorMessage: `${StringsRepo.error.dailyChecksFail}: ${e}`,
            dispatch,
          });
          return undefined;
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.dailyChecksFail}: ${e}`,
        dispatch,
      });
      return undefined;
    }
  },
);

export const regenerateDataModelThunk = createAsyncThunk(
  "model/regenerateDataModel",

  async (
    payload: {
      currentModel: ModelModel | undefined;
      regenDataType: RegenDataModel;
    },
    { dispatch },
  ) => {
    if (!payload.currentModel) {
      await helper.errorModal({
        errorMessage: StringsRepo.error.modelNotFound,
        dispatch,
      });
      return undefined;
    }
    console.log(`Regenerate ${payload.regenDataType} data in progress...`);

    try {
      const newMotivation =
        payload.regenDataType === RegenDataModel.MOTIVATION
          ? await AI.generateModelMotivation(payload.currentModel.name)
          : payload.currentModel.motivation;

      const newFood =
        payload.regenDataType === RegenDataModel.FOOD
          ? await AI.generateModelMeals(payload.currentModel.name)
          : payload.currentModel.meals;

      const newTraining =
        payload.regenDataType === RegenDataModel.GYM
          ? await AI.generateModelTrainings(payload.currentModel.name)
          : payload.currentModel.training;

      const newFreeTime =
        payload.regenDataType === RegenDataModel.FREE_TIME
          ? await AI.generateModelFreeTime(payload.currentModel.name)
          : payload.currentModel.freeTime;

      const newChallenges =
        payload.regenDataType === RegenDataModel.CHALLENGE
          ? await AI.generateModelChallenges(payload.currentModel.name)
          : payload.currentModel.challenges;

      const newModel: ModelModel = {
        ...payload.currentModel,
        motivation: newMotivation,
        meals: newFood,
        training: newTraining,
        freeTime: newFreeTime,
        challenges: newChallenges,
      };

      return await update(
        ref(FIREBASE_REALTIME_DB, "models/" + newModel.id),
        newModel,
      )
        .then(() => {
          return newModel;
        })
        .catch(async (e) => {
          await helper.errorModal({
            errorMessage: `${StringsRepo.error.regenerateDataFail}: ${e}`,
            dispatch,
          });
          return undefined;
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.regenerateDataFail}: ${e}`,
        dispatch,
      });
      return undefined;
    }
  },
);

export const updateModelPhotoThunk = createAsyncThunk(
  "model/updateModelPhoto",

  async (
    payload: {
      currentModel: ModelModel | undefined;
      blob: Blob;
    },
    { dispatch },
  ) => {
    let image: string | number = "";

    if (!payload.currentModel) {
      await helper.errorModal({
        errorMessage: StringsRepo.error.modelNotFound,
        dispatch,
      });
      return undefined;
    }
    console.log(`Update model photo..`);

    try {
      //upload the image to Firebase Storage

      const storageRef = FIREBASE_APP.storage(
        "gs://modelyourday.firebasestorage.app",
      )
        .ref()
        .child(
          `${FIREBASE_STORAGE_PHOTOS_MODEL_PATH}${payload.currentModel.id}.jpg`,
        );

      await storageRef
        .put(payload.blob)
        .then(async (snapshot) => {
          image = await snapshot.ref.getDownloadURL();
        })
        .catch((e) => {
          console.error(e);
          image = payload?.currentModel?.image ?? "";
        });
    } catch (error) {
      console.error(error);
      image = payload.currentModel.image;
    }

    // Update the model image
    try {
      const newModel: ModelModel = {
        ...payload.currentModel,
        image: image,
      };

      return await update(
        ref(FIREBASE_REALTIME_DB, "models/" + newModel.id),
        newModel,
      )
        .then(async () => {
          // Update user model list
          await dispatch(
            userActions.updateModelsList({
              id: newModel.id,
              name: newModel.name,
              photo: newModel.image,
            }),
          );
          return newModel;
        })
        .catch(async (e) => {
          await helper.errorModal({
            errorMessage: `${StringsRepo.error.updateModelPhotoFail}: ${e}`,
            dispatch,
          });
          return undefined;
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.updateModelPhotoFail}: ${e}`,
        dispatch,
      });
      return undefined;
    }
  },
);

export const generateModelPhotoThunk = createAsyncThunk(
  "model/generateModelPhoto",
  async (
    payload: {
      currentModel: ModelModel | undefined;
    },
    { dispatch },
  ) => {
    console.log("Generate image for: ", payload.currentModel?.name);
    try {
      if (!payload.currentModel?.name || payload.currentModel?.name === "") {
        await helper.errorModal({
          errorMessage: StringsRepo.error.generateModelPhotoFail,
          message: StringsRepo.error.generateModelPhotoFail,
          dispatch,
        });
        return undefined;
      }

      await AI.generateModelImage(payload.currentModel?.name).then(
        async (imageUri) => {
          if (!!imageUri) {
            console.log("Image generated", imageUri);
            await helper
              .imageUriToBlob(imageUri)
              .then(async (blob: Blob | undefined) => {
                if (blob) {
                  await dispatch(
                    updateModelPhotoThunk({
                      currentModel: payload.currentModel,
                      blob,
                    }),
                  );
                }
              });
          }
        },
      );
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: e,
        message: StringsRepo.error.generateModelPhotoFail,
        dispatch,
      });
    }
  },
);
