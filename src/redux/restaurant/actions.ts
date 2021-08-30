import { AppThunk } from "../store";
import { restaurantActions } from "./slice";
import api from "./api";
import { customToast } from "../../utils/toastify";

export const fetchRestaurant =
  (id: string): AppThunk =>
  async (dispatch) => {
    try {
      restaurantActions.setLoading(true);
      const { data } = await api.restaurant(id);
      console.log("this shit is res data ", data);

      dispatch(restaurantActions.setRestaurant(data));
      restaurantActions.setLoading(false);
      customToast("success", "اطلاعات دریافت شد");
    } catch (e) {
      customToast("error", "اطلاعات دریافت نشد");
      console.log("error has happend!!");
    }
  };
