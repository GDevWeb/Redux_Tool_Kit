import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counter";
import fruits from "./features/Fruits/fruits";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fruits,
  },
});
