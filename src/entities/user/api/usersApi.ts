import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "@/shared/api/config";
import type { User } from "../model/types";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINTS.users }),
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetUsersQuery } = usersApi;
