import { AppThunk } from "../store";
import { restaurantsActions } from "./slice";
import api from "./api";

export const fetchRestaurants = (): AppThunk => async (dispatch, getState) => {
  const { restaurants } = getState();
  const { pageIndex, numberOfItems } = restaurants;
  try {
    restaurantsActions.setLoading(true);
    const { data } = await api.restaurants(pageIndex, numberOfItems);
    dispatch(restaurantsActions.addRestaurants(data));
    dispatch(restaurantsActions.setLoading(false));
  } catch (e) {
    dispatch(restaurantsActions.setError(true));
  }
};
