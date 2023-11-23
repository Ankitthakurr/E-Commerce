import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/product/ProductContext";

const CartItem = ({ item }) => {
  const [quantity, setQuantity] = useState(1);
  const { removeCart, total,items, totalIncrease, totalDecrease } =
    useContext(ProductContext);

  const increase = () => {
    setQuantity(quantity + 1);
    totalIncrease(item.price);
  };

  const decrease = () => {
    setQuantity(quantity == 1 ? quantity : quantity - 1);
    quantity !== 1 &&  totalDecrease(item.price);
  };

  useEffect(() => {
    total();
  }, [items]);

  return (
    <>
      <div className="cart-item">
        <img src={item.image} alt="" />
        <span>
          <h1>{item.title}</h1>
          <h3>price : $ {item.price}</h3>
          <h3>
            Qty :{" "}
            <button
              className="add-btn"
              onClick={() => {
                decrease();
               
              }}
            >
              -
            </button>{" "}
            &nbsp; {quantity} &nbsp;{" "}
            <button
              className="add-btn"
              onClick={() => {
                increase();
               
              }}
            >
              +
            </button>
          </h3>
        </span>
        <button className="remove-btn" onClick={() => removeCart(item.id)}>
          Remove Item
        </button>
      </div>
    </>
  );
};

export default CartItem;
