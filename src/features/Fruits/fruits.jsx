import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  list: [
    {
      id: nanoid(8),
      name: "Mango",
      url: "/images/mango.jpg",
      price: 5,
    },
    {
      id: nanoid(8),
      name: "Watermelon",
      url: "/images/watermelon.jpg",
      price: 4,
    },
  ],
};
export const fruits = createSlice({
  name: "fruits",
  initialState,
});

export default fruits.reducer;
