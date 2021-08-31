import { combineReducers } from "redux";
import sharedSlice from "./shared/slice";
import themeSlice from "./theme/slice";
import restaurantsSlice from "./restaurants/slice";
import restaurantSlice from "./restaurant/slice";
import userSlice from "./user/slice";
import cartSlice from "./cart/slice";

const reducers = combineReducers({
  shared: sharedSlice,
  globalTheme: themeSlice,
  restaurants: restaurantsSlice,
  restaurant: restaurantSlice,
  user: userSlice,
  cart: cartSlice,
});

export default reducers;
