import { AppThunk } from "../store";
import { restaurantActions } from "./slice";
import api from "./api";
import { customToast } from "../../utils/toastify";

export const fetchrestaurant = (): AppThunk => async (dispatch, getState) => {
  const { restaurant } = getState();
  const { pageIndex, numberOfItems } = restaurant;
  try {
    restaurantActions.setLoading(true);
    const { data } = await api.restaurant(pageIndex, numberOfItems);
    dispatch(restaurantActions.addrestaurant(data));
    restaurantActions.setLoading(false);
    customToast("success", "اطلاعات دریافت شد");
  } catch (e) {
    customToast("error", "اطلاعات دریافت نشد");
    console.log("error has happend!!");
  }
};
