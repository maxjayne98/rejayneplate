import { createSlice } from "@reduxjs/toolkit";
import { FoodPartyFood } from "../../model";
import dayjs, { Dayjs } from "dayjs";

type foodPartyStates = {
  endTime: Dayjs;
  foodPartyFoods: Array<FoodPartyFood>;
  fetchFoodPartyFoodsLoadingStatus: boolean;
  fetchFoodPartyFoodsError: string;
  fetchFoodPartyEndTimeStatus: boolean;
  fetchFoodPartyEndTimeError: string;
};

const initialState: foodPartyStates = {
  endTime: dayjs().add(4, "hour"),
  foodPartyFoods: [],
  fetchFoodPartyFoodsLoadingStatus: false,
  fetchFoodPartyFoodsError: "",
  fetchFoodPartyEndTimeStatus: false,
  fetchFoodPartyEndTimeError: "",
};

const foodPartySlice = createSlice({
  name: "foodParty",
  initialState: initialState,
  reducers: {
    setEndTime: (state, action) => {
      // state.endTime = action.payload;
      // state.endTime = dayjs.
    },
    setFoodPartyFoods: (state, action) => {
      state.foodPartyFoods = action.payload;
    },
    setFoodPartyFoodsLoadingStatus: (state, action) => {
      state.fetchFoodPartyFoodsLoadingStatus = action.payload;
    },
    setFoodPartyFoodsLoadingError: (state, action) => {
      state.fetchFoodPartyFoodsError = action.payload;
    },
    setFoodPartyEndTimeStatus: (state, action) => {
      state.fetchFoodPartyEndTimeStatus = action.payload;
    },
    setFoodPartyendTimeError: (state, action) => {
      state.fetchFoodPartyEndTimeError = action.payload;
    },
  },
});

export const foodPartyActions = foodPartySlice.actions;

export default foodPartySlice.reducer;
