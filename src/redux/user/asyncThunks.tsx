import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_REALTIME_DB } from "../../backend";
import { UserType } from "../../models";
import { get, ref, set, update } from "firebase/database";
import { StringsRepo } from "../../resources";
import { helper } from "../../helper";

const registerSettingDataFails = async (e: Error, dispatch: any) => {
  console.log("User set FAILED: " + e.message);
  const currentUser = FIREBASE_AUTH.currentUser;

  await helper.basicError({
    message: StringsRepo.errorSettingInitialData,
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
      return await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        payload.user.email,
        payload.password,
      ).then(async () => {
        console.log("User created SUCCESSFULLY");
        await set(
          ref(FIREBASE_REALTIME_DB, "users/" + FIREBASE_AUTH.currentUser?.uid),
          {
            username: payload.user.username,
            email: payload.user.email,
            age: payload.user.age,
            isOnboardingComplete: false,
            modelsList: ["IGNORE"],
            selectedModel: "",
          },
        )
          .then((r) => {
            console.log("User set SUCCESSFULLY");
          })
          .catch(async (e) => await registerSettingDataFails(e, dispatch));
      });
    } catch (e: any) {
      console.error(e);
      await helper.basicError({ dispatch });
    }
  },
);

export const logoutThunk = createAsyncThunk(
  "user/logout",
  async (payload: void, { dispatch }) => {
    console.log("Logging out...");
    try {
      return await FIREBASE_AUTH.signOut();
    } catch (e: any) {
      console.error(e);
      await helper.basicError({ dispatch });
    }
  },
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async (payload: { email: string; password: string }, { dispatch }) => {
    try {
      console.log("Logging in...");
      return await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        payload.email,
        payload.password,
      );
    } catch (e: any) {
      console.error(e);
      if (e.code === "auth/invalid-credential") {
        await helper.basicError({
          message: StringsRepo.incorrectEmailOrPassword,
          dispatch,
        });
      }
    }
  },
);

const getUserFails = async (e: Error, dispatch: any) => {
  console.error(e);
  await helper.basicError({ dispatch });
  await dispatch(logoutThunk());
};

export const getUserThunk = createAsyncThunk(
  "user/getUser",
  async (payload: void, { dispatch }) => {
    console.log("Fetching User Data...");
    try {
      return await get(
        ref(FIREBASE_REALTIME_DB, "users/" + FIREBASE_AUTH.currentUser?.uid),
      ).then(async (response) => {
        let user: UserType | undefined = undefined;
        if (response.exists()) {
          user = {
            username: response.val().username,
            email: response.val().email,
            age: response.val().age,
            isOnboardingComplete: response.val().isOnboardingComplete,
            modelsList: response.val().modelsList,
            selectedModel: response.val().selectedModel,
          };
        } else {
          await getUserFails(
            Error("User not found: User does not exist"),
            dispatch,
          );
        }

        return user;
      });
    } catch (e: any) {
      await getUserFails(e, dispatch);
    }
  },
);

// TODO: TEST if isnt working
export const addModelToListThunk = createAsyncThunk(
  "user/addModelToList",
  // payload is the model ID
  async (payload: string, { dispatch }) => {
    console.log("Adding model to list...");
    try {
      return await get(
        ref(FIREBASE_REALTIME_DB, "users/" + FIREBASE_AUTH.currentUser?.uid),
      ).then(async (response) => {
        if (response.exists()) {
          const modelsList: string[] = response.val().modelsList;
          //Just in case
          if (modelsList[0] === "IGNORE" || modelsList.length < 1) {
            modelsList.splice(0, 1);
          }

          modelsList.push(payload);
          return await update(
            ref(
              FIREBASE_REALTIME_DB,
              "users/" + FIREBASE_AUTH.currentUser?.uid,
            ),
            {
              modelsList: modelsList,
            },
          )
            .then(() => {
              return modelsList;
            })
            .catch(async (e) => {
              console.error("Create model FAIL: ", e);
              await helper.basicError({ dispatch });
              return undefined;
            });
        } else {
          console.error("Create model FAIL: No data");
          //Show an error modal
          await helper.basicError({ dispatch });
          return undefined;
        }
      });
    } catch (e: any) {
      console.error("FAIL to create the user: ", e);
      await helper.basicError({ dispatch });
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
        ref(FIREBASE_REALTIME_DB, "users/" + FIREBASE_AUTH.currentUser?.uid),
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
          console.error("Set selected model FAIL: ", e);
          await helper.basicError({ dispatch });
          return undefined;
        });
    } catch (e: any) {
      console.error("FAIL to set the selected model: ", e);
      await helper.basicError({ dispatch });
      return undefined;
    }
  },
);
