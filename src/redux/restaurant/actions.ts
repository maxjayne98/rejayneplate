import { AppThunk } from "../store";
import { restaurantActions } from "./slice";
import api from "./api";
import { customToast } from "../../utils/toastify";

export const fetchRestaurant =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(restaurantActions.setLoading(true));
      const { data } = await api.restaurant(id);
      dispatch(restaurantActions.setRestaurant(data));
      dispatch(restaurantActions.setLoading(false));
    } catch (e) {
      customToast("error", "اطلاعات دریافت نشد");
    }
  };
