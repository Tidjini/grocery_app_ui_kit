import { Actions } from "react-native-router-flux";

import { START_APP, ENTER_MAIN } from "./types";

export const start = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: START_APP });
      Actions.wellcome();
    }, 4000);
  };
};

export const main = () => {
  return { type: ENTER_MAIN };
};
