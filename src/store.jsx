import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counter";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
