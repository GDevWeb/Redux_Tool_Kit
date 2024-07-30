import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../features/counter.jsx";

export default function Counter() {
  const counter = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="text-xl font-extrabold text-center">
      <h1 className="text-black">CounterReducer</h1>
      <div className="text-white">{counter}</div>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
    </div>
  );
}
