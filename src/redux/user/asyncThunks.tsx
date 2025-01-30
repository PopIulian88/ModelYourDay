import { createAsyncThunk } from "@reduxjs/toolkit";
import { FIREBASE_REALTIME_DB } from "../../backend";
import { SmallModelModel, UserType } from "../../models";
import { get, ref, set, update } from "firebase/database";
import { googleWebClientId, StringsRepo } from "../../resources";
import { helper } from "../../helper";
import {
  GoogleSignin,
  isErrorWithCode,
  statusCodes,
} from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

const registerSettingDataFails = async (e: Error, dispatch: any) => {
  console.log("User set FAILED: " + e.message);
  const currentUser = auth().currentUser;

  await helper.errorModal({
    errorMessage: e.toString(),
    message: StringsRepo.error.settingInitialData,
    dispatch,
  });

  // DELETE USER
  await currentUser
    ?.delete()
    .then(() => {
      console.log("User deleted SUCCESSFULLY");
    })
    .catch((e) => console.error("User deleted FAILED: " + e.message));
};

export const registerThunk = createAsyncThunk(
  "user/register",
  async (payload: { user: UserType; password: string }, { dispatch }) => {
    try {
      console.log("Registering...");
      return await auth()
        .createUserWithEmailAndPassword(payload.user.email, payload.password)
        .then(async () => {
          console.log("User created SUCCESSFULLY: ", auth().currentUser?.uid);
          await set(
            ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
            {
              id: auth().currentUser?.uid,
              isConnectedWithGoogle: false,
              username: payload.user.username,
              email: payload.user.email,
              age: payload.user.age,
              isOnboardingComplete: false,
              modelsList: [
                {
                  id: "IGNORE",
                  name: "IGNORE",
                  description: "IGNORE",
                },
              ],
              selectedModel: "",
            },
          )
            .then((r) => {
              console.log("User set SUCCESSFULLY");
            })
            .catch(async (e) => await registerSettingDataFails(e, dispatch));
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: e,
        dispatch,
      });
    }
  },
);

export const signInGoogleThunk = createAsyncThunk(
  "user/signInGoogle",
  async (payload: void, { dispatch }) => {
    try {
      console.log("SignIn with Google...");

      GoogleSignin.configure({
        webClientId: googleWebClientId,
        offlineAccess: true,
      });

      // Check if your device supports Google Play
      await GoogleSignin.hasPlayServices({
        showPlayServicesUpdateDialog: true,
      });

      // Get the users ID token
      const signInResult = await GoogleSignin.signIn();

      if (!signInResult.data?.idToken) {
        throw new Error("ERROR: ID Token is undefined");
      }
      const googleCredential = auth.GoogleAuthProvider.credential(
        signInResult.data.idToken,
      );

      // Sign-in the user with the credential
      return await auth()
        .signInWithCredential(googleCredential)
        .then(async (credential) => {
          console.log("User created SUCCESSFULLY");

          // If is a new user, set the initial data
          if (credential.additionalUserInfo?.isNewUser) {
            await set(
              ref(FIREBASE_REALTIME_DB, "users/" + credential.user.uid),
              {
                id: credential.user.uid,
                isConnectedWithGoogle: true,
                username: "Unknown",
                email: credential.user.email,
                age: 0,
                isOnboardingComplete: false,
                modelsList: [
                  {
                    id: "IGNORE",
                    name: "IGNORE",
                    description: "IGNORE",
                  },
                ],
                selectedModel: "",
              },
            )
              .then((r) => {
                console.log("User set SUCCESSFULLY");
              })
              .catch(async (e) => await registerSettingDataFails(e, dispatch));
          }
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: e,
        dispatch,
      });

      if (isErrorWithCode(e)) {
        switch (e.code) {
          case statusCodes.IN_PROGRESS:
            console.log("ERROR: Operation in progress");
            break;
          case statusCodes.PLAY_SERVICES_NOT_AVAILABLE:
            console.log("ERROR: Play services not available");
            break;
          default:
            console.log("ERROR: ", e);
            break;
        }
      } else {
        console.log("ERROR: ", e);
      }
    }
  },
);

export const logoutThunk = createAsyncThunk(
  "user/logout",
  async (payload: void, { dispatch }) => {
    console.log("Logging out...");
    try {
      if (auth().currentUser?.providerData[0].providerId === "google.com") {
        console.log("Signing out from Google...");
        GoogleSignin.configure({
          webClientId: googleWebClientId,
          offlineAccess: true,
        });

        await GoogleSignin.signOut();
      }
      console.log("Signing out from Firebase...");
      await auth().signOut();
      console.log("Signed out successfully!");
    } catch (e: any) {
      console.error("Error during sign-out:", e);
      await helper.errorModal({ errorMessage: e, dispatch });
    }
  },
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async (payload: { email: string; password: string }, { dispatch }) => {
    try {
      console.log("Logging in...");
      return auth()
        .signInWithEmailAndPassword(payload.email, payload.password)
        .then(() => {
          console.log("User logged in SUCCESSFULLY");
        });
    } catch (e: any) {
      if (e.code === "auth/invalid-credential") {
        await helper.errorModal({
          errorMessage: e,
          message: StringsRepo.incorrectEmailOrPassword,
          dispatch,
        });
      }
    }
  },
);

export const getUserThunk = createAsyncThunk(
  "user/getUser",
  async (payload: void, { dispatch }) => {
    try {
      console.log("Fetching User Data..., " + auth().currentUser?.uid);

      return await get(
        ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
      ).then(async (response) => {
        let user: UserType | undefined = undefined;
        if (response.exists()) {
          user = {
            id: response.val().id,
            isConnectedWithGoogle: response.val().isConnectedWithGoogle,
            username: response.val().username,
            email: response.val().email,
            age: response.val().age,
            isOnboardingComplete: response.val().isOnboardingComplete,
            modelsList: response.val().modelsList,
            selectedModel: response.val().selectedModel,
          };
        }
        return user;
      });
    } catch (e: any) {
      await helper.errorModal({ errorMessage: e, dispatch });
    }
  },
);

export const addModelToListThunk = createAsyncThunk(
  "user/addModelToList",
  // payload is the model ID
  async (payload: SmallModelModel, { dispatch }) => {
    console.log("Adding model to list...");
    try {
      return await get(
        ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
      ).then(async (response) => {
        if (response.exists()) {
          const modelsList: SmallModelModel[] = response.val().modelsList;
          //Just in case
          if (modelsList[0].id === "IGNORE" || modelsList.length < 1) {
            modelsList.splice(0, 1);
          }

          modelsList.push(payload);
          return await update(
            ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
            {
              modelsList: modelsList,
            },
          )
            .then(() => {
              return modelsList;
            })
            .catch(async (e) => {
              await helper.errorModal({
                errorMessage: `${StringsRepo.error.createModelFail}: ${e}`,
                dispatch,
              });
              return undefined;
            });
        } else {
          await helper.errorModal({
            errorMessage: StringsRepo.error.createModelNoData,
            dispatch,
          });
          //Logout the user
          await dispatch(logoutThunk());
          return undefined;
        }
      });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.createUserFail}: ${e}`,
        dispatch,
      });
      //Logout the user
      await dispatch(logoutThunk());
      return undefined;
    }
  },
);

export const removeModelFromListThunk = createAsyncThunk(
  "user/removeModelToList",
  // payload is the model ID
  async (
    payload: { id: string; modelList: SmallModelModel[] },
    { dispatch },
  ) => {
    console.log(`Remove model(${payload.id}) from list...`);
    //One model should always be there
    if (payload.id === "" || payload.modelList.length < 2) {
      await helper.errorModal({
        errorMessage: StringsRepo.error.default,
        dispatch,
      });
      return undefined;
    }
    try {
      const modelsList: SmallModelModel[] = [...payload.modelList];

      const indexModelToRemove: number = modelsList.findIndex(
        (model) => model.id === payload.id,
      );

      modelsList.splice(indexModelToRemove, 1);

      return await update(
        ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
        {
          modelsList: modelsList,
        },
      )
        .then(() => {
          return modelsList;
        })
        .catch(async (e) => {
          await helper.errorModal({
            errorMessage: `${StringsRepo.error.removeModelFail}: ${e}`,
            dispatch,
          });
          return undefined;
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.removeModelFail}: ${e}`,
        dispatch,
      });
      return undefined;
    }
  },
);

export const setSelectedModelThunk = createAsyncThunk(
  "user/setSelectedModel",
  // payload is the model ID
  async (payload: string, { dispatch }) => {
    console.log("Setting selected model...");
    try {
      return await update(
        ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
        {
          //HERE WE COMPLETE THE ONBOARDING TOO
          isOnboardingComplete: true,
          selectedModel: payload,
        },
      )
        .then(() => {
          return payload;
        })
        .catch(async (e) => {
          await helper.errorModal({
            errorMessage: `${StringsRepo.error.setSelectedModelFail}: ${e}`,
            dispatch,
          });
          return undefined;
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.setSelectedModelFail}: ${e}`,
        dispatch,
      });
      return undefined;
    }
  },
);

export const updateNameAndAgeUserThunk = createAsyncThunk(
  "user/updateNameAndAgeUser",
  // payload is the model ID
  async (payload: { username: string; age: number }, { dispatch }) => {
    console.log("Update name and age to: ", payload.username, payload.age);
    try {
      return await update(
        ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
        {
          username: payload.username,
          age: payload.age,
        },
      )
        .then(() => {
          return {
            username: payload.username,
            age: payload.age,
          };
        })
        .catch(async (e) => {
          await helper.errorModal({
            errorMessage: `${StringsRepo.error.updateNameAndAgeFail}: ${e}`,
            dispatch,
          });
          return undefined;
        });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.updateNameAndAgeFail}: ${e}`,
        dispatch,
      });
      return undefined;
    }
  },
);

export const updateModelsListThunk = createAsyncThunk(
  "user/updateModelsListUser",
  async (payload: { newModelData: SmallModelModel }, { dispatch }) => {
    console.log("Update ModelsList... ");

    try {
      return await get(
        ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
      ).then(async (response) => {
        if (response.exists()) {
          // Just in case
          if (
            response.val().modelsList[0].id === "IGNORE" ||
            response.val().modelsList.length < 1
          ) {
            await helper.errorModal({
              errorMessage: StringsRepo.error.default,
              dispatch,
            });
            return undefined;
          }

          //Create a copy of the modelsList
          const updatedModelsList: SmallModelModel[] = [
            ...response.val().modelsList,
          ];

          //Remove the model we want to update
          const indexModelToRemove: number = updatedModelsList.findIndex(
            (model) => model.id === payload.newModelData.id,
          );
          updatedModelsList.splice(indexModelToRemove, 1);

          //if the model doesn't exist
          if (indexModelToRemove === -1) {
            await helper.errorModal({
              errorMessage: StringsRepo.error.idDontExist,
              dispatch,
            });
            return undefined;
          }

          //Add the updated model
          updatedModelsList.push(payload.newModelData);

          return await update(
            ref(FIREBASE_REALTIME_DB, "users/" + auth().currentUser?.uid),
            {
              modelsList: updatedModelsList,
            },
          )
            .then(() => {
              return updatedModelsList;
            })
            .catch(async (e) => {
              await helper.errorModal({
                errorMessage: `${StringsRepo.error.updateModelsListFail}: ${e}`,
                dispatch,
              });
              return undefined;
            });
        } else {
          await helper.errorModal({
            errorMessage: `${StringsRepo.error.updateModelsListFail}: ${e}`,
            dispatch,
          });
          return undefined;
        }
      });
    } catch (e: any) {
      await helper.errorModal({
        errorMessage: `${StringsRepo.error.updateModelsListFail}: ${e}`,
        dispatch,
      });
      return undefined;
    }
  },
);
