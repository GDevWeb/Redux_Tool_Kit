import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOne, removeOne, resetCart } from "../../features/Fruits/fruitsCart";

export const FruityCart = () => {
  const fruitsCart = useSelector((state) => state.fruitsCart.cart);
  const dispatch = useDispatch((state) => state.fruits);
  console.log(fruitsCart);
  return (
    <div className="bg-slate-100 rounded">
      <p className="text-2xl text-center font-semibold p-5 border-b border-slate-400">
        Your FruityCart
      </p>
      <ul>
        {fruitsCart.element}
        {fruitsCart.length > 0 &&
          fruitsCart.map((fruit) => {
            return (
              <li key={fruit.id} className="bg-slate-100 p-4 w-full rounded">
                <img
                  className="w-full h-[250px] object-cover mb-3 rounded"
                  src={fruit.url}
                  alt={`picture of ${fruit.name}`}
                />
                <div className="flex justify-between items-baseline mb-4">
                  <h2 className="text-2xl md-2 font-semibold ">{fruit.name}</h2>
                  <p className="text-lg font-semibold">
                    Per unit : {fruit.price}€
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    className="w-full bg-green-600 hover:bg-green-500 text-slate-100 p-1 rounded text-lg"
                    onClick={() => dispatch(addOne(fruit))}
                  >
                    Add one
                  </button>
                  <button
                    className="w-full bg-red-600 hover:bg-red-500 text-slate-100 p-1 rounded text-lg"
                    onClick={() => dispatch(removeOne(fruit.id))}
                  >
                    Remove one
                  </button>
                </div>
                <div className="flex align-middle place-content-evenly text-xl p-5 border-t border-slate-400">
                  <p className="font-semibold">
                    Quantity :{" "}
                    <span className="font-medium">{fruit.quantity}</span>
                  </p>
                  <p className="font-semibold">
                    <span className="font-medium">
                      Total price per article : {fruit.quantity * fruit.price}
                    </span>
                  </p>
                </div>
              </li>
            );
          })}
        <div>
          {fruitsCart.length === 0 && (
            <h2 className="text-2xl md-2 py-2 font-semibold text-center">
              ...Your Cart is empty
            </h2>
          )}

          {fruitsCart.length > 0 && (
            <>
              <div className="flex flex-col justify-between p-4 text-right border-t-2">
                <h2 className="text-2xl md-2 p-1 font-semibold border-b-2">
                  Total article :{" "}
                  {fruitsCart.reduce((acc, fruit) => acc + fruit.quantity, 0)}
                </h2>
                <h2 className="text-2xl md-2 font-semibold ">
                  Total price :{" "}
                  {fruitsCart.reduce(
                    (acc, fruit) => acc + fruit.price * fruit.quantity,
                    0
                  )}
                  €
                </h2>
              </div>
              <button
                className="w-fit m-2 bg-orange-600 hover:bg-orange-500 text-slate-100 p-1 rounded text-lg"
                onClick={() => dispatch(resetCart())}
              >
                Reset Cart
              </button>
            </>
          )}
        </div>
      </ul>
    </div>
  );
};
