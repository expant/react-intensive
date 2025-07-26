import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_ENDPOINTS } from "@/shared/api/config";
import type { Photo } from "../model/types";

export const photosApi = createApi({
  reducerPath: "photosApi",
  baseQuery: fetchBaseQuery({ baseUrl: API_ENDPOINTS.photos }),
  endpoints: (builder) => ({
    getPhotos: builder.query<Photo[], void>({
      query: () => "",
    }),
  }),
});

export const { useGetPhotosQuery } = photosApi;
