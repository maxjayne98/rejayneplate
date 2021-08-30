import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../../model";

type RestaurantStates = {
  restaurant: Restaurant;
  isLoading: boolean;
  pageIndex: number;
  numberOfItems: number;
};

const initialState: RestaurantStates = {
  restaurant: {} as Restaurant,
  isLoading: false,
  pageIndex: 1,
  numberOfItems: 10,
};

const restaurantSlice = createSlice({
  name: "restaurant",
  initialState: initialState,
  reducers: {
    setRestaurant: (state, action: any) => {
      state.restaurant = action.payload;
    },
    setLoading: (state, action) => {
      console.log("this shit is loading", action);

      state.isLoading = action.payload;
    },
    increasePageIndex: (state, action) => {
      state.pageIndex = action.payload;
    },
  },
});

export const restaurantActions = restaurantSlice.actions;

export default restaurantSlice.reducer;
