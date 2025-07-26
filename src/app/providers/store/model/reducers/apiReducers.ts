import { postsApi } from "@/entities/post/api/postsApi";
import { albumsApi } from "@/entities/album/api/albumsApi";
import { commentsApi } from "@/entities/comment/api/commentsApi";
import { photosApi } from "@/entities/photo/api/photosApi";
import { todosApi } from "@/entities/todo/api/todosApi";
import { usersApi } from "@/entities/user/api/usersApi";

const apis = [postsApi, albumsApi, commentsApi, photosApi, todosApi, usersApi];

export const apiReducers = Object.fromEntries(
  apis.map((api) => [api.reducerPath, api.reducer])
);
