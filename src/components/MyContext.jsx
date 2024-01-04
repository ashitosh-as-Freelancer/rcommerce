// MyContext.js
import productData from "../data";

import { createContext, useReducer, useContext } from 'react';

const MyContext = createContext();

const initialState = {
  items: [],
  miniCartShow: false,
  cartTotal: 0,
  noOfItems: 0
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'showMinicart':
      return { ...state, miniCartShow: action.payload.showMinicart };
    case 'AddProduct':
      return { ...state, miniCartShow: true, cartTotal: state.cartTotal + action.payload.price, noOfItems: state.noOfItems + 1, items: [...state.items, action.payload.item]};
    case 'RemoveProduct': 
      return { ...state, miniCartShow: true, cartTotal: state.cartTotal - action.payload.price, noOfItems: state.noOfItems - 1 };
    case 'AddQuantity': 
      return { ...state, items: action.payload.items, miniCartShow: action.payload.showMinicart, noOfItems: state.noOfItems + 1, cartTotal: action.payload.cartTotal};
    case 'RemoveQuantity': 
      return { ...state, items: action.payload.items, miniCartShow: action.payload.showMinicart, noOfItems: state.noOfItems + 1 , cartTotal: action.payload.cartTotal};
    case 'ClearCart':
      return initialState;
    default:
      return state;
  }
};

const MyContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function addCart(id) {
    const isPresentInCart = state.items.find((product)=> {return product.id === id});
    if (isPresentInCart) {
      addQuantity(id, true);
    } else {
      const getProduct = productData.find((product)=> {return product.id === id})
      const product = {...getProduct, qty: 1, total: getProduct.price};
      dispatch({type: 'AddProduct', payload: {showMinicart: true, item: product, price: product.price}});
    }
  }

  function addQuantity(id, showMinicart) {
    let cartTotal = 0;
    const items = state.items.map((item)=> { 
      if (item.id === id) {
        item.qty = item.qty + 1;
        item.total = item.price * item.qty;
      }
      cartTotal = cartTotal + item.total; 
      return item;
    });
    dispatch({type: 'AddQuantity', payload: {items: items, showMinicart: showMinicart, cartTotal: cartTotal}})
  }

  function decrementQuantity(id,showMinicart) {
    let cartTotal = 0;
    const items = state.items.map((item)=> { 
      if (item.id === id) {
        item.qty = item.qty > 1 ? item.qty - 1 : 1;
        item.total = item.price * item.qty;
      }
      cartTotal = cartTotal + item.total; 
      return item;
    });  
    dispatch({type: 'RemoveQuantity', payload: {items: items,showMinicart: showMinicart ,cartTotal: cartTotal}})
  }

  return (
    <MyContext.Provider value={{ state, dispatch, addCart, addQuantity, decrementQuantity }}>
      {children}
    </MyContext.Provider>
  );
};

function useMyContext() {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a MyContextProvider');
  }
  return context;
}

export { MyContextProvider, useMyContext };
