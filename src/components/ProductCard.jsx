import React, { useContext } from "react";
import ProductContext from "../context/product/ProductContext";

const ProductCard = ({ product }) => {
  const {cartAdd} =useContext(ProductContext)
  return (
    <div className="product">
      <img src={product.image} alt="" />
      <h1>{product.title.slice(0,40)+"..."}</h1>
      <span>
        <h3>Price : $ {product.price}</h3>
        <button className="add_cart" onClick={()=>cartAdd(product)}>Add to cart</button>
      </span>
    </div>
  );
};

export default ProductCard;
