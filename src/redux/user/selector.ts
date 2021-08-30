import { User } from "../../model";
import { RootState } from "../store";

export const selectUser = (state: RootState): User => state.user.user;

export const selectUserIsLoading = (state: RootState): boolean =>
  state.user.isLoading;

export const selectUserError = (state: RootState): boolean =>
  state.user.hasError;
