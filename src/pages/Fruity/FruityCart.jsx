import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addOne,
  removeOne,
} from "../../features/Fruits/slices/fruitsCartSlice";

const FruityCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.fruitsCart.cart);
  const fruits = useSelector((state) => state.fruits.list);

  const handleAdd = (fruit) => {
    dispatch(addOne(fruit));
  };

  const handleRemove = (fruit) => {
    dispatch(removeOne(fruit));
  };

  return (
    <div>
      <h1>Fruity Cart</h1>
      <div>
        <h2>Available Fruits</h2>
        {fruits.map((fruit) => (
          <div key={fruit.id}>
            <img src={fruit.url} alt={fruit.name} width={50} />
            <h3>{fruit.name}</h3>
            <p>Price: ${fruit.price}</p>
            <p>Stock: {fruit.quantity}</p>
            <button onClick={() => handleAdd(fruit)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cart.map((item) => (
            <div key={item.id}>
              <img src={item.url} alt={item.name} width={50} />
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => handleRemove(item)}>
                Remove from Cart
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default FruityCart;
