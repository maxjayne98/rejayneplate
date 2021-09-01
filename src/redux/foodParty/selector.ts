import { Food, FoodPartyFood } from "../../model";
import { RootState } from "../store";

export const selectFoodPartyFoods = (state: RootState): Array<FoodPartyFood> =>
  state.foodParty.foodPartyFoods;

export const selectFoodPartyendTime = (state: RootState): number =>
  state.foodParty.endTime;

export const selectFoodPartyendTimeLoadingStatus = (
  state: RootState
): boolean => state.foodParty.fetchFoodPartyendTimeStatus;
export const selectFoodPartyFoodsLoadingStatus = (state: RootState): boolean =>
  state.foodParty.fetchFoodPartyFoodsLoadingStatus;

export const selectfetchingFoodPartyFoodsError = (state: RootState): string =>
  state.foodParty.fetchFoodPartyFoodsError;
export const selectHasFetchingFoodPartyendTimeError = (
  state: RootState
): string => state.foodParty.fetchFoodPartyendTimeError;
