import { START_APP, ENTER_MAIN } from "../actions/types";

const INITIAL_STATE = {
  start: "",
  main: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_APP:
      return { ...state, start: "start" };
    case ENTER_MAIN:
      return { ...state, main: "main" };
    default:
      return state;
  }
};
