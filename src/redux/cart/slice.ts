import { createSlice } from "@reduxjs/toolkit";
import { Cart } from "../../model";

type cartStates = {
  cart: Cart;
  cartLoadingStatus: boolean;
  hasfetchingCartError: string;
  addingFoodLoadingStatus: boolean;
  hasAddingFoorError: string;
  deletingFoodLoadingStatus: boolean;
  hasDeletingFoorError: string;
  lastAddedFoodId: string;
  lastDeletedFoodId: string;
};

const initialState: cartStates = {
  cart: {} as Cart,
  cartLoadingStatus: false,
  hasfetchingCartError: "",
  addingFoodLoadingStatus: false,
  hasAddingFoorError: "",
  deletingFoodLoadingStatus: false,
  hasDeletingFoorError: "",
  lastAddedFoodId: "",
  lastDeletedFoodId: "string",
};

const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    setCart: (state, action: any) => {
      state.cart = action.payload;
    },
    setCartLoading: (state, action) => {
      state.cartLoadingStatus = action.payload;
    },
    setCartError: (state, action) => {
      state.hasfetchingCartError = action.payload;
    },
    setAddingFoodLoading: (state, action) => {
      state.addingFoodLoadingStatus = action.payload;
    },
    setAddingFoodError: (state, action) => {
      state.hasAddingFoorError = action.payload;
    },
    setDeletingFoodLoading: (state, action) => {
      state.deletingFoodLoadingStatus = action.payload;
    },
    setDeletingFoodError: (state, action) => {
      state.hasDeletingFoorError = action.payload;
    },
    setLastAddedFood: (state, action) => {
      state.lastAddedFoodId = action.payload;
    },
    setLastDeletedFood: (state, action) => {
      state.lastDeletedFoodId = action.payload;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
