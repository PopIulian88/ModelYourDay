import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { FIREBASE_AUTH } from "../../backend";

export const registerThunk = createAsyncThunk(
  "user/register",
  async (payload: { email: string; password: string }) => {
    try {
      const response = await createUserWithEmailAndPassword(
        FIREBASE_AUTH,
        payload.email,
        payload.password,
      );
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
);

export const loginThunk = createAsyncThunk(
  "user/login",
  async (payload: { email: string; password: string }) => {
    try {
      const response = await signInWithEmailAndPassword(
        FIREBASE_AUTH,
        payload.email,
        payload.password,
      );
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  },
);
