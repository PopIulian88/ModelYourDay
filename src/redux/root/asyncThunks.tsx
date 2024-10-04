import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, ref } from "firebase/database";
import { FIREBASE_REALTIME_DB } from "../../backend";
import { UserType } from "../../models";

export const getUsersThunk = createAsyncThunk("root/getUsers", async () => {
  console.log("Fetching Users Data...");
  try {
    return await get(ref(FIREBASE_REALTIME_DB, "users")).then((response) => {
      let users: UserType[] = [];
      response.forEach((user) => {
        users = [
          ...users,
          {
            username: user.val().username,
            email: user.val().email,
            age: user.val().age,
          } as UserType,
        ];
      });
      return users;
    });
  } catch (e) {
    console.error(e);
    return [
      {
        username: "NULL",
        email: "NULL",
        age: 0,
      },
    ] as UserType[];
  }
});
