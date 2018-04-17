import { START_APP, ENTER_MAIN, ENTER_DETAILS } from "../actions/types";

const INITIAL_STATE = {
  start: "",
  main: "",
  details: ""
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_APP:
      return { ...state, start: "start" };
    case ENTER_MAIN:
      return { ...state, main: "main" };
    case ENTER_DETAILS:
      return { ...state, details: "details" };
    default:
      return state;
  }
};
