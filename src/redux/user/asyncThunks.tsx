import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_REALTIME_DB } from "../../backend";
import { UserType } from "../../models";
import { get, ref, set } from "firebase/database";
import { rootActions } from "../root";
import { StringsRepo } from "../../resources";

const registerSettingDataFails = async (e: Error, dispatch: any) => {
  console.log("User set FAILED: " + e.message);
  const currentUser = FIREBASE_AUTH.currentUser;

  //Show an error modal
  dispatch(
    rootActions.showModal({
      error: true,
      title: StringsRepo.errorSettingInitialData,
      buttonTitle: StringsRepo.close,
    }),
  );

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
      //Show an error modal
      dispatch(
        rootActions.showModal({
          error: true,
          title: StringsRepo.error,
          buttonTitle: StringsRepo.close,
        }),
      );
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
      //Show an error modal
      dispatch(
        rootActions.showModal({
          error: true,
          title: StringsRepo.error,
          buttonTitle: StringsRepo.close,
        }),
      );
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
        //Show an error modal
        dispatch(
          rootActions.showModal({
            error: true,
            title: StringsRepo.incorrectEmailOrPassword,
            buttonTitle: StringsRepo.close,
          }),
        );
      }
    }
  },
);

const getUserFails = async (e: Error, dispatch: any) => {
  console.error(e);
  //Show an error modal
  dispatch(
    rootActions.showModal({
      error: true,
      title: StringsRepo.error,
      buttonTitle: StringsRepo.logout,
    }),
  );
  //Logout the user
  await dispatch(logoutThunk());
  // throw e;
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
