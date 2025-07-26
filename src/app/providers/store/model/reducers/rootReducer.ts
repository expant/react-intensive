import { apiReducers } from "./apiReducers";
import postReducer from "@/entities/post/model/slice/postSlice";
import userReducer from "@/entities/user/model/slice/userSlice";

export const rootReducer = {
  ...apiReducers,
  posts: postReducer,
  users: userReducer,
};
