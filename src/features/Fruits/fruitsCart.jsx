import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

export const fruitsCarts = createSlice({
  name: "fruitsCart",
  initialState,
  reducers: {
    addOne: (state, action) => {
      const findIndex = state.cart.findIndex(
        (element) => element.id === action.payload.id
      );
      if (findIndex !== -1) {
        state.cart[findIndex].quantity++;
        console.log("Incremented quantity for", state.cart[findIndex]);
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        console.log("Added to cart", action.payload);
      }
    },
    removeOne: (state, action) => {
      const findIndex = state.cart.findIndex(
        (element) => element.id === action.payload
      );
      if (findIndex !== -1) {
        if (state.cart[findIndex].quantity === 1) {
          state.cart.splice(findIndex, 1);
          console.log("Removed item with id", action.payload);
        } else {
          state.cart[findIndex].quantity--;
          console.log("Decremented quantity for", state.cart[findIndex]);
        }
      }
    },
    resetCart: (state, action) => {
      if (window.confirm("Do you really want to reset your cart?")) {
        state.cart = [];
        console.log("Cart reset");
      }
    },
  },
});

export const { addOne, removeOne, resetCart } = fruitsCarts.actions;

export default fruitsCarts.reducer;
