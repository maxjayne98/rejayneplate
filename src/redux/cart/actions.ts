import { AppThunk } from "../store";
import { customToast } from "../../utils";
import { cartActions } from "./slice";
import api from "./api";

export const fetchCard = (): AppThunk => async (dispatch) => {
  try {
    dispatch(cartActions.setCartLoading(true));
    const { data } = await api.fetchCart();
    dispatch(cartActions.setCart(data));
    dispatch(cartActions.setCartLoading(false));
  } catch (e) {
    dispatch(cartActions.setCartError(e));
    dispatch(cartActions.setCartError(true));
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
      customToast("success", "عذا با موفقیت اضافه شد.");
      dispatch(cartActions.setAddingFoodLoading(""));
    } catch ({ response }) {
      customToast("success", response.content);
      dispatch(cartActions.setCartError(response.content));
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
    } catch ({ response }) {
      customToast("warning", response.content);
      dispatch(cartActions.setCartError(response.content));
      dispatch(cartActions.setCartLoading(false));
      dispatch(cartActions.setLastDeletedFood(""));
    }
  };
