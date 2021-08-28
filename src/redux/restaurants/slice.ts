import { createSlice } from "@reduxjs/toolkit";
import { Restaurant } from "../../model";

type RestaurantsStates = {
  restaurants: Array<Restaurant>;
  isLoading: boolean;
  pageIndex: number;
  numberOfItems: number;
};

const initialState: RestaurantsStates = {
  restaurants: [],
  isLoading: false,
  pageIndex: 1,
  numberOfItems: 10,
};

const restaurantsSlice = createSlice({
  name: "restaurants",
  initialState: initialState,
  reducers: {
    addRestaurants: (state, action) => {
      state.restaurants = [...action.payload, ...state.restaurants];
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    increasePageIndex: (state, action) => {
      state.pageIndex = action.payload;
    },
  },
});

export const restaurantsActions = restaurantsSlice.actions;

export default restaurantsSlice.reducer;
