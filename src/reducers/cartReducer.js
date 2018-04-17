import { ADD_CART, REMOVE_CART } from "../actions/types";
import { addNewElement, previousCount } from "../../utils/utils";

const INITIAL_STATE = {
  items: 0,
  products: []
};

export default (state = INITIAL_STATE, action) => {
  // console.log(action);
  // console.log(state);
  switch (action.type) {
    case ADD_CART:
      const addItems = state.items + 1;
      const addId = action.payload;
      const addCount = previousCount(state.products, addId) + 1;
      const addProduct = { id: addId, count: addCount };
      const addProducts = addNewElement(state.products, addProduct);
      return { ...state, items: addItems, products: addProducts };
    case REMOVE_CART:
      const items = state.items - 1;
      const id = action.payload;
      const count = previousCount(state.products, id) - 1;
      const product = { id, count };
      const products = addNewElement(state.products, product);
      return { ...state, items, products };
    default:
      return state;
  }
};
