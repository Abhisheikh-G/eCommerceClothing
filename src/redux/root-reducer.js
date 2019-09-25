import userReducer from "../redux/user/user.reducer";
import cartReducer from "../redux/cart/cart.reducer";
import { combineReducers } from "redux";

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
