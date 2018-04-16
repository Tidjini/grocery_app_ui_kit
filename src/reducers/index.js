import { combineReducers } from "redux";
import routeReducers from "./routeReducers";
import cartReducer from "./cartReducer";

//this containe all our reducers (function that give us data (states of the application))
export default combineReducers({
  routes: routeReducers,
  cart: cartReducer
});
