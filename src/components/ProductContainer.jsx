import React, { useContext, useEffect } from "react";
import ProductCard from "./ProductCard";
import ProductContext from "../context/product/ProductContext";
import { fetchProduct } from "../context/product/ProductAction";

const ProductContainer = () => {
  const {products, dispatch } = useContext(ProductContext);
  
  const getProduct = async () => {
    const data = await fetchProduct()
    dispatch({
      type : "GET_PRODUCT",
      payload : data
    })
  }
  
  useEffect(()=>{
    getProduct()
  }, [])

  if(!products || products.length === 0) {
      return (
        <div>
          <h1 className="all-products-title">Loading...</h1>
        </div>
      )
    }

  return (
   <>
   {
    <div className="container">
      <h1 className="all-products-title">All Products</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
   }
   </>
  );
};

export default ProductContainer;
