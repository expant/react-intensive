import { configureStore } from "@reduxjs/toolkit";
import { apiMiddlewares } from "./api/middlwares";
import { rootReducer } from "./model/reducers/rootReducer";

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(...apiMiddlewares),
});
