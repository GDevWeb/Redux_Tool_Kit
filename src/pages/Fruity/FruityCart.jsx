import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addOne, removeOne, resetCart } from "../../features/Fruits/fruitsCart";

export const FruityCart = () => {
  const cart = useSelector((state) => state.fruitsCart.cart);
  const discount = useSelector((state) => state.fruitsCart.discount);
  const fruitsList = useSelector((state) => state.fruits.list);
  const dispatch = useDispatch();

  const totalArticle = cart.reduce((acc, fruit) => acc + fruit.quantity, 0);
  const totalPrice = cart.reduce(
    (acc, fruit) => acc + fruit.price * fruit.quantity,
    0
  );
  const discountedPrice = totalPrice * (1 - discount / 100);

  return (
    <div className="bg-slate-100 rounded">
      <p className="text-2xl text-center font-semibold p-5 border-b border-slate-400">
        Your FruityCart
      </p>
      <ul>
        {cart.length > 0 ? (
          cart.map((fruit) => {
            const stock = fruitsList.find(
              (item) => item.id === fruit.id
            ).quantity;
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
                  {stock > 0 && (
                    <button
                      className="w-full bg-green-600 hover:bg-green-500 text-slate-100 p-1 rounded text-lg"
                      onClick={() =>
                        stock > 0
                          ? dispatch(addOne(fruit, fruitsList))
                          : alert("Stock is empty")
                      }
                    >
                      Add one
                    </button>
                  )}
                  <button
                    className="w-full bg-red-600 hover:bg-red-500 text-slate-100 p-1 rounded text-lg"
                    onClick={() => dispatch(removeOne(fruit, fruitsList))}
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

                {stock > 0 ? (
                  <p className="text-lg font-semibold text-right text-green-500">
                    in stock
                  </p>
                ) : (
                  <p className="text-lg font-semibold text-right text-red-500">
                    out of stock
                  </p>
                )}
              </li>
            );
          })
        ) : (
          <h2 className="text-2xl md-2 py-2 font-semibold text-center">
            ...Your Cart is empty
          </h2>
        )}

        {cart.length > 0 && (
          <>
            <div className="flex flex-col justify-between p-4 text-right border-t-2">
              <h2 className="text-2xl md-2 p-1 font-semibold border-b-2">
                Total article : {totalArticle}
              </h2>
              <h2 className="text-2xl md-2 font-semibold ">
                Total price : {totalPrice}€
              </h2>
              {discount > 0 && (
                <h2 className="text-2xl md-2 font-semibold ">
                  Discounted Price : {discountedPrice.toFixed(2)} €
                </h2>
              )}
            </div>
            <button
              className="w-fit m-2 p-2 bg-orange-600 hover:bg-orange-500 text-slate-100 rounded text-lg"
              onClick={() => dispatch(resetCart())}
            >
              Reset Cart
            </button>
          </>
        )}
      </ul>
    </div>
  );
};
