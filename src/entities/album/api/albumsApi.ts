import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "@/shared/api/config";
import type { Album } from "../model/types";

export const albumsApi = createApi({
  reducerPath: "albumsApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINTS.albums }),
  endpoints: (builder) => ({
    getAlbums: builder.query<Album[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetAlbumsQuery } = albumsApi;
