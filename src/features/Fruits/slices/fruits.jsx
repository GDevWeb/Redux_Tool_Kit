import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = {
  list: [
    {
      id: nanoid(8),
      type: "fruit",
      name: "Mango",
      url: "/images/mango.jpg",
      price: 5,
    },
    {
      id: nanoid(8),
      type: "fruit",
      name: "Watermelon",
      url: "/images/watermelon.jpg",
      price: 4,
    },
  ],
};

export const fruits = createSlice({
  name: "fruits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase("fruitsCart/addOne", (state, action) => {
      console.log("Hello from fruits reducer", action.payload);
    });
  },
});

export default fruits.reducer;
