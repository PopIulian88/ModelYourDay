import firebase from "firebase/compat";
import initializeApp = firebase.initializeApp;
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// @ts-ignore
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyD08S_ijoqjOgJO70F0m57i7auziKXjsAk",
  authDomain: "modelyourday.firebaseapp.com",
  databaseURL: "https://modelyourday-default-rtdb.firebaseio.com",
  projectId: "modelyourday",
  storageBucket: "modelyourday.appspot.com",
  messagingSenderId: "372526517273",
  appId: "1:372526517273:web:888b4dbc3fc0040a676e88",
};

const FIREBASE_APP = initializeApp(firebaseConfig);
const FIREBASE_AUTH = initializeAuth(FIREBASE_APP, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});
const FIREBASE_REALTIME_DB = getDatabase();

export { FIREBASE_APP, FIREBASE_AUTH, FIREBASE_REALTIME_DB };
