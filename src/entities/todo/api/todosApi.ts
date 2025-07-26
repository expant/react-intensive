import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "@/shared/api/config";
import type { Todo } from "../model/types";

export const todosApi = createApi({
  reducerPath: "todosApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINTS.todos }),
  endpoints: (builder) => ({
    getTodos: builder.query<Todo[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetTodosQuery } = todosApi;
