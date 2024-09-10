import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { RootReducer, IRootState } from "./root";
import { IUserState, UserReducer } from "./user";

//for backup - keep an eye on iOS
// const transformCircular = createTransform(
//   (inboundState, key) => Flatted.stringify(inboundState),
//   (outboundState, key) => Flatted.parse(outboundState),
// )
// const storage = {
//   ...AsyncStorage,
//   getItem: async (key: string) => {
//     const value = await AsyncStorage.getItem(key);
//     if (value === null) {
//       return null;
//     }
//     return Flatted.parse(value);
//   },
//   setItem: async (key: string, value: any) =>
//     AsyncStorage.setItem(key, Flatted.stringify(value)),
// };

const persistConfig = {
  key: "appRoot",
  storage: AsyncStorage,
};

// Complete this interface with any new created slices
export interface IStore {
  rootReducer: IRootState;
  userReducer: IUserState;
}

// For each new created slice add it here
const reducers = combineReducers({
  rootReducer: RootReducer,
  userReducer: UserReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      // serializableCheck: { //Not sure, will have to come back
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
      serializableCheck: false,
      immutableCheck: false,
    }),
});

// To know when the store is loading
export const persistor = persistStore(store);

// To know the state of the store
// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// So we can use the dispatch
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>(); // Export a hook that can be reused to resolve types
