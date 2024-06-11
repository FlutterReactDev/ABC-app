import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {},

  middleware(getDefaultMiddleware) {
    return getDefaultMiddleware().concat([]);
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
