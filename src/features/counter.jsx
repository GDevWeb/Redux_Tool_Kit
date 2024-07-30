import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state, action) => {
      state.value++; //avec RTK cette méthode est permis grâce à "Immer js" qui en backstage s'occuper du state sans pour autant provoquer de mutation.
    },
  },
});

console.log(counter);
// exportation :
const { increment } = counter.actions;
export default counter.reducer;
