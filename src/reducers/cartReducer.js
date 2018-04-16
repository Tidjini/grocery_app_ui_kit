import { ADD_CART, REMOVE_CART } from "../actions/types";

const INITIAL_STATE = {
  items: 0
};

export default (state = INITIAL_STATE, action) => {
  let items = 0;
  switch (action.type) {
    case ADD_CART:
      items = state.items + 1;
      return { ...state, items };
    case REMOVE_CART:
      items = state.items - 1;
      return { ...state, items };
    default:
      return state;
  }
};
