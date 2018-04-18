import { Actions } from "react-native-router-flux";

import { START_APP, ENTER_MAIN, ENTER_DETAILS, ENTER_CART } from "./types";

export const start = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: START_APP });
      Actions.wellcome();
    }, 4000);
  };
};

export const main = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ENTER_MAIN });
      Actions.main();
    }, 50);
  };
};

export const details = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ENTER_DETAILS });
      Actions.details();
    }, 50);
  };
};
export const cart = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: ENTER_CART });
      Actions.cart();
    }, 50);
  };
};
