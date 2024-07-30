import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/Counter/counter";
import fruits from "./features/Fruits/fruits";
import fruitsCart from "./features/Fruits/fruitsCart";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fruits,
    fruitsCart,
  },
});
