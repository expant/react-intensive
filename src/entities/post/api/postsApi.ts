import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "@/shared/api/config";
import type { Post } from "../model/types";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINTS.posts }),
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetPostsQuery } = postsApi;
