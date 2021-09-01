import { createSlice } from "@reduxjs/toolkit";
import { FoodPartyFood } from "../../model";

type foodPartyStates = {
  endTime: number;
  foodPartyFoods: Array<FoodPartyFood>;
  fetchFoodPartyFoodsLoadingStatus: boolean;
  fetchFoodPartyFoodsError: string;
  fetchFoodPartyendTimeStatus: boolean;
  fetchFoodPartyendTimeError: string;
};

const initialState: foodPartyStates = {
  endTime: 0,
  foodPartyFoods: [],
  fetchFoodPartyFoodsLoadingStatus: false,
  fetchFoodPartyFoodsError: "",
  fetchFoodPartyendTimeStatus: false,
  fetchFoodPartyendTimeError: "",
};

const foodPartySlice = createSlice({
  name: "foodParty",
  initialState: initialState,
  reducers: {
    setendTime: (state, action) => {
      state.endTime = action.payload;
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
    setFoodPartyendTimeStatus: (state, action) => {
      state.fetchFoodPartyFoodsLoadingStatus = action.payload;
    },
    setFoodPartyendTimeError: (state, action) => {
      state.fetchFoodPartyFoodsError = action.payload;
    },
  },
});

export const foodPartyActions = foodPartySlice.actions;

export default foodPartySlice.reducer;
