import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  counter: 0,
  loading: false,
  error: {},
};

const sharedSlice = createSlice({
  name: "shared",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.counter += action.payload;
    },
    decrement: (state, action) => {
      state.counter -= action.payload;
    },
  },
});

export const { addTodo, toggleTodo } = sharedSlice.actions;

export default sharedSlice.reducer;
