import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../model";

type UserStates = {
  user: User;
  isLoading: boolean;
  hasError: boolean;
};

const initialState: UserStates = {
  user: {} as User,
  isLoading: false,
  hasError: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    setUser: (state, action: any) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      console.log("this shit is loading", action);
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      console.log("this shit is loading", action);
      state.isLoading = action.payload;
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
