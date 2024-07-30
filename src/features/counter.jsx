import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++; //avec RTK cette méthode est permis grâce à "Immer js" qui en backstage s'occuper du state sans pour autant provoquer de mutation.
    },
    decrement: (state) => {
      state.value--;
    },
  },
});

console.log(counterSlice);
// exportation :
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
