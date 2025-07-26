import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import { postsApi } from "../../api/postsApi";
import type { RootState } from "@/app/providers/store/model/types";
import type { Post } from "../types";

const postsAdapter = createEntityAdapter<Post>();
const initialState = postsAdapter.getInitialState();

const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(
      postsApi.endpoints.getPosts.matchFulfilled,
      (state, { payload }) => {
        postsAdapter.setAll(state, payload);
      }
    );
  },
});

export const { selectById: selectPostById, selectAll } =
  postsAdapter.getSelectors((state: RootState) => state.posts);

export default postSlice.reducer;
