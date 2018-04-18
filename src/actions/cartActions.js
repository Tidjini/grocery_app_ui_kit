import { ADD_CART, REMOVE_CART } from "./types";

export const addToCart = id => {
  return dispatch => {
    dispatch({
      type: ADD_CART,
      payload: id
    });
  };
};

export const removeFromCart = id => {
  return dispatch => {
    dispatch({
      type: REMOVE_CART,
      payload: id
    });
  };
};
