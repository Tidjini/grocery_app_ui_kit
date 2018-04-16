import { ADD_CART, REMOVE_CART } from "./types";

export const addToCart = () => {
  return {
    type: ADD_CART
  };
};

export const removeFromCart = () => {
  return {
    type: REMOVE_CART
  };
};
