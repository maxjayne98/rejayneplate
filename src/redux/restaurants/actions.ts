import { AppThunk } from "../store";
import { restaurantsActions } from "./slice";
import api from "./api";

export const fetchRestaurants = (): AppThunk => async (dispatch, getState) => {
  const { restaurants } = getState();
  const { pageIndex, numberOfItems } = restaurants;
  try {
    dispatch(restaurantsActions.setLoading(true));
    const { data } = await api.restaurants(pageIndex, numberOfItems);
    setTimeout(() => {
      dispatch(restaurantsActions.increasePageIndex(pageIndex + 1));
      dispatch(restaurantsActions.addRestaurants(data));
      dispatch(restaurantsActions.setLoading(false));
    }, 1000);
  } catch (e) {
    dispatch(restaurantsActions.setError(true));
  }
};
