import { ADD_CART, REMOVE_CART } from "./types";

export const addToCart = id => {
  return {
    type: ADD_CART,
    payload: id
  };
};

export const removeFromCart = id => {
  return {
    type: REMOVE_CART,
    payload: id
  };
};
