import { Dayjs } from "dayjs";
import { FoodPartyFood } from "../../model";
import { RootState } from "../store";

export const selectFoodPartyFoods = (state: RootState): Array<FoodPartyFood> =>
  state.foodParty.foodPartyFoods;

export const selectFoodPartyEndTime = (state: RootState): Dayjs =>
  state.foodParty.endTime;

export const selectFoodPartyendTimeLoadingStatus = (
  state: RootState
): boolean => state.foodParty.fetchFoodPartyEndTimeStatus;
export const selectFoodPartyFoodsLoadingStatus = (state: RootState): boolean =>
  state.foodParty.fetchFoodPartyFoodsLoadingStatus;

export const selectfetchingFoodPartyFoodsError = (state: RootState): string =>
  state.foodParty.fetchFoodPartyFoodsError;
export const selectHasFetchingFoodPartyendTimeError = (
  state: RootState
): string => state.foodParty.fetchFoodPartyEndTimeError;
