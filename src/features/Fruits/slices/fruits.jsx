import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import { addOne, removeOne } from "../fruitsCart";

const initialState = {
  list: [
    {
      id: nanoid(8),
      type: "fruit",
      name: "Mango",
      url: "/images/mango.jpg",
      price: 5,
      quantity: 22,
    },
    {
      id: nanoid(8),
      type: "fruit",
      name: "Watermelon",
      url: "/images/watermelon.jpg",
      price: 4,
      quantity: 22,
    },
  ],
};

export const fruits = createSlice({
  name: "fruits",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOne, (state, action) => {
        console.log("Hello from fruits reducer", action.payload);

        //handle stock quantity
        const fruitIndex = state.list.findIndex(
          (fruit) => fruit.id === action.payload.id
        );
        if (fruitIndex !== -1) {
          state.list[fruitIndex].quantity -= 1;
        }

        if (
          state.list[fruitIndex].quantity <= 20 &&
          state.list[fruitIndex].quantity > 10
        ) {
          console.warn(
            `The stock of ${state.list[fruitIndex].name} is : ${state.list[fruitIndex].quantity} - Forecast handle the "Stock"`
          );
        } else if (
          state.list[fruitIndex].quantity <= 10 &&
          state.list[fruitIndex].quantity > 0
        ) {
          console.warn(
            `The stock of ${state.list[fruitIndex].name} is : ${state.list[fruitIndex].quantity} - Low stock alert!`
          );
        } else if (state.list[fruitIndex].quantity === 0) {
          console.warn(
            `The stock of ${state.list[fruitIndex].name} is : ${state.list[fruitIndex].quantity} - We are out of stock !`
          );
          state.list[fruitIndex].quantity = 0;
        } else {
          console.warn(
            `Cannot add more ${state.list[fruitIndex].name}, stock is empty!`
          );
        }
      })
      .addCase(removeOne, (state, action) => {
        const fruitIndex = state.list.findIndex(
          (fruit) => fruit.id === action.payload.id
        );
        if (fruitIndex !== -1) {
          state.list[fruitIndex].quantity += 1;
          console.warn(
            `RemoveOne - The stock of ${state.list[fruitIndex].name} is: ${state.list[fruitIndex].quantity}`
          );
        }
      });
  },
});

export default fruits.reducer;
