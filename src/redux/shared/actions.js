import { sharedActions } from "./slice";

export const increaseCounter = (num) => ({
  type: sharedActions.increment,
  payload: num,
});

export const decreaseCounter = (num) => ({
  type: sharedActions.decrement,
  payload: num,
});
