import React from "react";
import { CounterResult } from "./CounterResult.jsx";
import { CounterButtons } from "./CounterButtons.jsx";

export default function Counter() {
  return (
    <div className="text-xl font-extrabold text-center">
      <CounterResult />
      <CounterButtons />
    </div>
  );
}
