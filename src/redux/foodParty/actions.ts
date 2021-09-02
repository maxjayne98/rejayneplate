import { AppThunk } from "../store";
import { customToast } from "../../utils";
import { foodPartyActions } from "./slice";
import api from "./api";

export const fetchFoodPartyFoods = (): AppThunk => async (dispatch) => {
  try {
    dispatch(foodPartyActions.setFoodPartyFoodsLoadingStatus(true));
    const { data } = await api.fetchFoodPartyFoods();
    dispatch(foodPartyActions.setFoodPartyFoods(data));
    dispatch(foodPartyActions.setFoodPartyFoodsLoadingStatus(false));
  } catch (e) {
    dispatch(foodPartyActions.setFoodPartyFoodsLoadingError(e));
    dispatch(foodPartyActions.setFoodPartyFoodsLoadingStatus(false));
  }
};

export const fetchFoodPartyEndTime = (): AppThunk => async (dispatch) => {
  try {
    dispatch(foodPartyActions.setFoodPartyEndTimeStatus(true));
    const { data } = await api.fetchFoodPartyEndTime();
    dispatch(foodPartyActions.setEndTime(data));
    dispatch(foodPartyActions.setFoodPartyEndTimeStatus(false));
  } catch (e: any) {
    customToast("error", e.response.data.content as string);
    dispatch(
      foodPartyActions.setFoodPartyendTimeError(e.response.data.content)
    );
    dispatch(foodPartyActions.setFoodPartyEndTimeStatus(false));
  }
};

export const sumbitFoodPartyOrder =
  (foodName: string): AppThunk =>
  async (dispatch) => {
    try {
      // dispatch(foodPartyActions.setAddingFoodLoading(true));
      // dispatch(foodPartyActions.setLastDeletedFood(foodName));
      // const { data } = await api.deleteFromCart(foodName);
      // dispatch(foodPartyActions.setCart(data));
      // dispatch(foodPartyActions.setCartLoading(false));
      // dispatch(foodPartyActions.setLastDeletedFood(""));
      // customToast("warning", "غذا با موفقیت اضافه شد.");
    } catch (e: any) {
      // customToast("warning", e.response.data.content as string);
      // dispatch(foodPartyActions.setCartError(e.response.data.content));
      // dispatch(foodPartyActions.setCartLoading(false));
      // dispatch(foodPartyActions.setLastDeletedFood(""));
    }
  };
