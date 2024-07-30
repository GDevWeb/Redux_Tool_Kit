import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value = state.value + action.payload; //avec RTK cette méthode est permis grâce à "Immer js" qui en backstage s'occuper du state sans pour autant provoquer de mutation.
    },
    decrement: (state, action) => {
      state.value = state.value - action.payload;
    },
    multiply: (state) => {
      state.value = state.value * 10;
    },
    divide: (state) => {
      state.value = state.value / 10;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

console.log(counterSlice);
// exportation :
export const { increment, decrement, multiply, divide, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
