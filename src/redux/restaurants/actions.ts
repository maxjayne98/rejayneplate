import { AppThunk } from "../store";
import { restaurantsActions } from "./slice";
import api from "./api";

export const fetchRestaurants = (): AppThunk => async (dispatch, getState) => {
  const { restaurants } = getState();
  const { pageIndex, numberOfItems } = restaurants;
  try {
    await api
      .restaurants(pageIndex, numberOfItems)
      .then((res) =>
        dispatch(restaurantsActions.addRestaurants(res.data.results))
      );
  } catch (e) {
    console.log("error has happend!!");
  }
};
