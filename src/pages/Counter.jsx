import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const counter = useSelector((state) => state.counter);
  return (
    <div className="text-xl font-extrabold text-center">
      <h1 className="text-black">CounterReducer</h1>
      <div className="  text-white">{counter.value}</div>
    </div>
  );
}
