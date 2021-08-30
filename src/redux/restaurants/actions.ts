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
    restaurantsActions.setLoading(false);
  } catch (e) {
    // customToast("error", "اطلاعات دریافت نشد");
    restaurantsActions.setError(true);
  }
};
