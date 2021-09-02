import { AppThunk } from "../store";
import { customToast } from "../../utils";
import { cartActions } from "./slice";
import api from "./api";

export const fetchCart = (): AppThunk => async (dispatch) => {
  try {
    dispatch(cartActions.setCartLoading(true));
    const { data } = await api.fetchCart();
    dispatch(cartActions.setCart(data));
    dispatch(cartActions.setCartLoading(false));
  } catch (e) {
    dispatch(cartActions.setCartError(e));
  }
};

export const addFood =
  (foodName: string, restaurantId: string, count: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cartActions.setAddingFoodLoading(true));
      dispatch(cartActions.setLastAddedFood(foodName));
      const { data } = await api.addFoodToCart(restaurantId, foodName, count);
      dispatch(cartActions.setCart(data));
      dispatch(cartActions.setCartLoading(false));
      customToast("success", "غذا با موفقیت اضافه شد.");
      dispatch(cartActions.setAddingFoodLoading(""));
    } catch (e: any) {
      customToast("error", e.response.data.content as string);
      dispatch(cartActions.setCartError(e.response.data.content));
      dispatch(cartActions.setCartLoading(false));
      dispatch(cartActions.setAddingFoodLoading(""));
    }
  };

export const deleteFood =
  (foodName: string): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(cartActions.setAddingFoodLoading(true));
      dispatch(cartActions.setLastDeletedFood(foodName));
      const { data } = await api.deleteFromCart(foodName);
      dispatch(cartActions.setCart(data));
      dispatch(cartActions.setCartLoading(false));
      dispatch(cartActions.setLastDeletedFood(""));
      customToast("warning", "غذا با موفقیت اضافه شد.");
    } catch (e: any) {
      customToast("warning", e.response.data.content as string);
      dispatch(cartActions.setCartError(e.response.data.content));
      dispatch(cartActions.setCartLoading(false));
      dispatch(cartActions.setLastDeletedFood(""));
    }
  };
