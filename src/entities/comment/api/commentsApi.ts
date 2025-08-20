import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "@/shared/api/config";
import type { Comment } from "../model/types";

export const commentsApi = createApi({
  reducerPath: "commentsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINTS.comments }),
  endpoints: (builder) => ({
    getComments: builder.query<Comment[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetCommentsQuery } = commentsApi;
