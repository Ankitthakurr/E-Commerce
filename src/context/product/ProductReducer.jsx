const ProductReducer = (state,action) => {
  switch (action.type) {
    case "GET_PRODUCT":
      return {
        ...state,
        products: action.payload,
      };
      case "ADD" :{
        return{
          ...state, 
          items : [action.payload , ...state.items]
        }
      }
      case "IDCHECK" :{
        return{
          ...state, 
          idcheck : state.idcheck.includes(action.payload) ? [...state.idcheck] : [...state.idcheck, action.payload]
        }
      }
      case "REMOVE" : {
        return{
          ...state,
          items : [...state.items.filter((item)=>item.id !== action.payload)],
          idcheck : [...state.idcheck.filter((item)=>item !== action.payload)]
        }
      }
     case "TOTAL" : {
      return{
        ...state,
        totalPrice : action.payload
      }
     }
     case "TOTALINCREASE" : {
      return{
        ...state,
        totalPrice : state.totalPrice + action.payload
      }
     }
     case "TOTALDECREASE" : {
      return{
        ...state,
        totalPrice : state.totalPrice - action.payload
      }
     }
    default: {
      return state;
    }
  }
};

export default ProductReducer;


