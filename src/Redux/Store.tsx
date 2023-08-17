import { configureStore } from "@reduxjs/toolkit";
import { userDetailReducer } from "./Slice";

export const store = configureStore({
  reducer: {
    userInfoDetails: userDetailReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
