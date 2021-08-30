import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../../model";

type RestaurantStates = {
  restaurant: Array<Restaurant>;
  isLoading: boolean;
  pageIndex: number;
  numberOfItems: number;
};

const initialState: RestaurantStates = {
  restaurant: [],
  isLoading: false,
  pageIndex: 1,
  numberOfItems: 10,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    addrestaurant: (state, action) => {
      console.log(action, state);

      state.restaurant = [...action.payload, ...state.restaurant];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    increasePageIndex: (state, action) => {
      state.pageIndex = action.payload;
    },
  },
});

export const restaurantActions = restaurantSlice.actions;

export default restaurantSlice.reducer;
