import { combineReducers } from "redux";
import sharedSlice from "./shared/slice";
import themeSlice from "./theme/slice";
import restaurantsSlice from "./restaurants/slice";

const reducers = combineReducers({
  shared: sharedSlice,
  globalTheme: themeSlice,
  restaurants: restaurantsSlice,
});

export default reducers;
