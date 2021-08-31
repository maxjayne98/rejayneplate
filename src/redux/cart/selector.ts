import { Food, Cart, CartFood } from "../../model";
import { RootState } from "../store";

export const selectFoods = (state: RootState): Array<CartFood> =>
  state.cart.cart.foods;

export const selectFood = (state: RootState, foodId: string): CartFood =>
  state.cart.cart.foods.find((food) => food.id === foodId);

export const selectCount = (state: RootState): number => state.cart.cart.count;
export const selectEmpty = (state: RootState): boolean => state.cart.cart.empty;
export const selectRestaurantId = (state: RootState): string =>
  state.cart.cart.restaurantId;
export const selectTotal = (state: RootState): number => state.cart.cart.total;
export const selectCart = (state: RootState): Cart => state.cart.cart;

export const selectCartLoadingStatus = (state: RootState): boolean =>
  state.cart.cartLoadingStatus;
export const selectAddingFoodLoadingStatus = (state: RootState): boolean =>
  state.cart.addingFoodLoadingStatus;
export const selectDeletingFoodLoadingStatus = (state: RootState): boolean =>
  state.cart.deletingFoodLoadingStatus;

export const selectHasfetchingCartError = (state: RootState): string =>
  state.cart.hasfetchingCartError;
export const selectHasAddingFoorError = (state: RootState): string =>
  state.cart.hasAddingFoorError;
export const selectHasDeletingFoorError = (state: RootState): string =>
  state.cart.hasDeletingFoorError;
