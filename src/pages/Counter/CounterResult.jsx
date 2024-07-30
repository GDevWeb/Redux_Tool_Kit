import React from "react";
import { useSelector } from "react-redux";

export const CounterResult = () => {
  const counter = useSelector((state) => state.counter.value);

  return <h1 className="text-slate-100 text-3xl">Counter {counter}</h1>;
};
