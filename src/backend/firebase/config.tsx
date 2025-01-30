import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";
import {
  firebaseApiKey,
  firebaseAppId,
  firebaseMessagingSenderId,
} from "../../resources";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "modelyourday.firebaseapp.com",
  databaseURL: "https://modelyourday-default-rtdb.firebaseio.com",
  projectId: "modelyourday",
  storageBucket: "modelyourday.appspot.com",
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
};

// Verify that the Firebase app is not already initialized
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_STORAGE_PHOTOS_MODEL_PATH = "photos/model/";

// If we want to use Firebase Auth, we need to initialize it
// const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });

const FIREBASE_REALTIME_DB = getDatabase();

export {
  FIREBASE_APP,
  // FIREBASE_AUTH,
  FIREBASE_REALTIME_DB,
  //path
  FIREBASE_STORAGE_PHOTOS_MODEL_PATH,
};
