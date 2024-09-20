import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH, FIREBASE_REALTIME_DB } from "../../backend";
import { UserType } from "../../models";
import { get, ref, set } from "firebase/database";

export const registerThunk = createAsyncThunk(
  "user/register",
  async (payload: { user: UserType; password: string }) => {
    try {
      return await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        payload.user.email,
        payload.password,
      ).then(async () => {
        await set(
          ref(FIREBASE_REALTIME_DB, "users/" + FIREBASE_AUTH.currentUser?.uid),
          {
            username: payload.user.username,
            email: payload.user.email,
            age: payload.user.age,
          },
        )
          .then((r) => {
            console.log("User set SUCCESSFULLY");
          })
          .catch((e) => {
            console.log("User set FAILED: " + e.message);
          });
      });
    } catch (e) {
      console.error(e);
    }
  },
);

export const logoutThunk = createAsyncThunk("user/logout", async () => {
  try {
    return await FIREBASE_AUTH.signOut();
  } catch (e) {
    console.error(e);
  }
});

export const loginThunk = createAsyncThunk(
  "user/login",
  async (payload: { email: string; password: string }) => {
    try {
      return await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        payload.email,
        payload.password,
      );
    } catch (e) {
      console.error(e);
    }
  },
);

export const getUserThunk = createAsyncThunk("user/getUser", async () => {
  console.log("Fetching User Data...");
  try {
    return await get(
      ref(FIREBASE_REALTIME_DB, "users/" + FIREBASE_AUTH.currentUser?.uid),
    ).then((response) => {
      return response.exists()
        ? ({
            username: response.val().username,
            email: response.val().email,
            age: response.val().age,
          } as UserType)
        : ({
            username: "NULL",
            email: "NULL",
            age: 0,
          } as UserType);
    });
  } catch (e) {
    console.error(e);
    return {
      username: "NULL",
      email: "NULL",
      age: 0,
    } as UserType;
  }
});
