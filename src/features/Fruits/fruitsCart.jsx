import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
  discount: 0,
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
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      // Vérifiez si le nombre total d'articles dépasse 2 pour appliquer une réduction
      const totalQuantity = state.cart.reduce(
        (acc, fruit) => acc + fruit.quantity,
        0
      );
      if (totalQuantity >= 10) {
        state.discount = 10; // Application de la réduction de 10%
        console.warn("Promotion 10 off your total order");
      } else {
        state.discount = 0; // Pas de réduction
      }
    },
    removeOne: (state, action) => {
      const findIndex = state.cart.findIndex(
        (element) => element.id === action.payload.id
      );
      if (findIndex !== -1) {
        if (state.cart[findIndex].quantity === 1) {
          state.cart.splice(findIndex, 1);
        } else {
          state.cart[findIndex].quantity--;
        }
      }

      // Réajuster la réduction si le nombre total d'articles descend en dessous de 2
      const totalQuantity = state.cart.reduce(
        (acc, fruit) => acc + fruit.quantity,
        0
      );
      if (totalQuantity < 10) {
        state.discount = 0;
      }
    },
    resetCart: (state) => {
      if (window.confirm("Do you really want to reset your cart?")) {
        state.cart = [];
        state.discount = 0; // Réinitialiser la réduction

        // Gérer les stocks :
      }
    },
  },
});

export const { addOne, removeOne, resetCart } = fruitsCarts.actions;
export default fruitsCarts.reducer;
