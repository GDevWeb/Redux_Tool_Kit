import { useDispatch } from "react-redux";
import {
  decrement,
  divide,
  increment,
  multiply,
  reset,
} from "../../features/Counter/counter";

export const CounterButtons = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <p className="text-slate-50 mb-2">Modify the counter value</p>
        <button
          type="button"
          className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
          onClick={() => dispatch(increment(1))}
        >
          +1
        </button>
        <button
          type="button"
          className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
          onClick={() => dispatch(decrement(1))}
        >
          -1
        </button>
        <button
          type="button"
          className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
          onClick={() => dispatch(multiply())}
        >
          *10
        </button>
        <button
          type="button"
          className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
          onClick={() => dispatch(divide())}
        >
          /10
        </button>
        <button
          type="button"
          className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
          onClick={() => dispatch(reset())}
        >
          0
        </button>
      </div>
      <div>
        <button
          type="button"
          className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
          onClick={() => dispatch(increment(50))}
        >
          +50
        </button>
        <button
          type="button"
          className="w-10 h-10 text-lg bg-slate-100 rounded text-slate-900 mr-2"
          onClick={() => dispatch(decrement(50))}
        >
          -50
        </button>
      </div>
    </>
  );
};
