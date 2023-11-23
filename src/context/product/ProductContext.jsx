import { createContext, useEffect, useReducer } from "react";
import ProductReducer from "./ProductReducer";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const initialState = {
    products: [],
    items: [],
    idcheck: [],
    totalPrice: 0,
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);

  let cartAdd = (data) => {
    dispatch({
      type: "IDCHECK",
      payload: data.id,
    });
    if(state.idcheck.includes(data.id)){

    }else{
      dispatch({
        type: "ADD",
        payload: data,
      });
    }
  };

  const removeCart = (cart) => {
    dispatch({
      type: "REMOVE",
      payload: cart,
    });
  };

  
  const total = () => {
   dispatch({
    type: "TOTAL",
    payload: state.items.reduce((p,c)=>{ return p + c.price},0)
   })
}

const totalIncrease = (price) => {
dispatch({
  type: "TOTALINCREASE",
  payload: price 
})
}

const totalDecrease = (price) => {
dispatch({
  type: "TOTALDECREASE",
  payload: price 
})
}

  return (
    <ProductContext.Provider
      value={{ ...state, dispatch, cartAdd, removeCart,total,totalIncrease,totalDecrease}}
    >
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
