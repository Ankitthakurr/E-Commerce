import React, { useContext, useEffect, useState } from "react";
import ProductContext from "../context/product/ProductContext";
import { useParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { fetchProduct } from "../context/product/ProductAction";
const Card = () => {
  const { products, dispatch } = useContext(ProductContext);
  let { param } = useParams();

  const [newProducts, setNewPrducts] = useState([]);

  const getProduct = async () => {
    const data = await fetchProduct();
    dispatch({
      type: "GET_PRODUCT",
      payload: data,
    });
  };
  [];
  useEffect(() => {
    products.length === 0 && getProduct();
    setNewPrducts(products.filter((value) => value.category === param));
  }, [param, products]);

  return (
    <>
      <div className="container">
        {newProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Card;
