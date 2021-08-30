import { Restaurant } from "../../model";
import { RootState } from "../store";

export const selectRestaurants = (state: RootState): Array<Restaurant> =>
  state.restaurants.restaurants;

export const selectRestaurantIsLoading = (state: RootState): boolean =>
  state.restaurants.isLoading;

export const selectRestaurantPageIndex = (state: RootState): number =>
  state.restaurants.pageIndex;

export const selectNumberOfItems = (state: RootState): number =>
  state.restaurants.numberOfItems;

export const selectRestaurantError = (state: RootState): boolean =>
  state.restaurants.error;
