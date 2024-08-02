import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const fruitsCartSlice = createSlice({
  name: "fruitsCart",
  initialState,
  reducers: {
    addOne: (state, action) => {
      const fruitIndex = state.cart.findIndex(
        (fruit) => fruit.id === action.payload.id
      );
      if (fruitIndex !== -1) {
        state.cart[fruitIndex].quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
    },
    removeOne: (state, action) => {
      const fruitIndex = state.cart.findIndex(
        (fruit) => fruit.id === action.payload.id
      );
      if (fruitIndex !== -1 && state.cart[fruitIndex].quantity > 0) {
        state.cart[fruitIndex].quantity -= 1;
        if (state.cart[fruitIndex].quantity === 0) {
          state.cart.splice(fruitIndex, 1);
        }
      }
    },
  },
});

export const { addOne, removeOne } = fruitsCartSlice.actions;

export default fruitsCartSlice.reducer;
