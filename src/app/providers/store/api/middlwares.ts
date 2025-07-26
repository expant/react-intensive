import { postsApi } from "@/entities/post/api/postsApi";
import { albumsApi } from "@/entities/album/api/albumsApi";
import { commentsApi } from "@/entities/comment/api/commentsApi";
import { photosApi } from "@/entities/photo/api/photosApi";
import { todosApi } from "@/entities/todo/api/todosApi";
import { usersApi } from "@/entities/user/api/usersApi";
import type { Middleware } from "@reduxjs/toolkit";

export const apiMiddlewares: Middleware[] = [
  postsApi.middleware,
  albumsApi.middleware,
  commentsApi.middleware,
  photosApi.middleware,
  todosApi.middleware,
  usersApi.middleware,
];
