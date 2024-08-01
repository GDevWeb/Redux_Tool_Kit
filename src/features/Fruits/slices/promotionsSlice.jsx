import { createSlice } from "@reduxjs/toolkit";
import { addOne, removeOne, resetCart } from "../fruitsCart";

const initialState = {
  activePromotions: [],
  discount: 0,
};

export const promotionsSlice = createSlice({
  name: "promotions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addOne, (state, action) => {
        const cart = action.payload.cart || [];

        const totalQuantity = cart.reduce(
          (acc, fruit) => acc + fruit.quantity,
          0
        );

        if (totalQuantity >= 10) {
          state.discount = 10;
        } else {
          state.discount = 0;
        }
      })
      .addCase(removeOne, (state, action) => {
        const cart = action.payload.cart || [];
        const totalQuantity = cart.reduce(
          (acc, fruit) => acc + fruit.quantity,
          0
        );

        if (totalQuantity <= 10) {
          state.discount = 0;
        }
      })
      .addCase(resetCart, (state) => {
        state.discount = 0;
      });
  },
});

export default promotionsSlice.reducer;

/* 
@ revoir, je n'arrive pas à correctement m'en servir ...

*/
