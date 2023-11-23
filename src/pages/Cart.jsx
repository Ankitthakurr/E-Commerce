import React, { useContext } from "react";
import CartItem from "../components/CartItem";
import ProductContext from "../context/product/ProductContext";

const Cart = () => {

const {items,totalPrice} = useContext(ProductContext);
  return (
    <>
      <div className="cart-container">
        <div className="cart-items">
          {items.map((item)=> (
          <CartItem item={item} key={item.id} />
          ))}
        </div>

        <div className="bill-section">
          <h1>
            Total Amount : <br />
            <br />
            $ {totalPrice.toFixed(2)}
          </h1>
          <button className="pay-btn">Pay Now</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
