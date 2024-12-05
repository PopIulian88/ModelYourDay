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

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "modelyourday.firebaseapp.com",
  databaseURL: "https://modelyourday-default-rtdb.firebaseio.com",
  projectId: "modelyourday",
  storageBucket: "modelyourday.appspot.com",
  messagingSenderId: firebaseMessagingSenderId,
  appId: firebaseAppId,
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const FIREBASE_REALTIME_DB = getDatabase();

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_REALTIME_DB };
