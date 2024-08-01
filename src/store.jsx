import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import counterReducer from "./features/Counter/counter";
import fruitsCart from "./features/Fruits/fruitsCart";
import fruits from "./features/Fruits/slices/fruits";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    fruits,
    fruitsCart,
    // promotions: promotionsSlice,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(customMiddleWare),

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// function customMiddleWare(store) {
//   return function (next) {
//     return function (action) {
//       // console.log(store.getState());
//       // console.log(store.dispatch());
//       // console.log(store.next());
//       // console.log(store.action);

//       next({
//         type: "fruitCart/addOne",
//         id: nanoid(8),
//         type: "fruit",
//         name: "Watermelon",
//         url: "/images/watermelon.jpg",
//         price: 1.99,
//       });
//     };
//   };
// }
