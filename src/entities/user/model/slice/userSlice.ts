import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { usersApi } from "../../api/usersApi";
import type { RootState } from "@/app/providers/store/model/types";
import type { User } from "../types";

const usersAdapter = createEntityAdapter<User>();
const initialState = usersAdapter.getInitialState();

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      usersApi.endpoints.getUsers.matchFulfilled,
      (state, { payload }) => {
        usersAdapter.setAll(state, payload);
      }
    );
  },
});

export const { selectById: selectUserById } = usersAdapter.getSelectors(
  (state: RootState) => state.users
);

export default userSlice.reducer;
