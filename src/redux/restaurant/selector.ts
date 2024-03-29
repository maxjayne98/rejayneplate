import { Restaurant } from "../../model";
import { RootState } from "../store";

export const selectRestaurant = (state: RootState): Restaurant =>
  state.restaurant.restaurant;

export const selectRestaurantIsLoading = (state: RootState): boolean =>
  state.restaurant.isLoading;

export const selectRestaurantPageIndex = (state: RootState): number =>
  state.restaurant.pageIndex;

export const selectNumberOfItems = (state: RootState): number =>
  state.restaurant.numberOfItems;
