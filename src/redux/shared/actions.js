import { sharedActions } from "./slice";
import api from "./api";
export const increaseCounter = (num) => sharedActions.increment(num);
export const decreaseCounter = (num) => sharedActions.decrement(num);
export const fetchUser = () => async (dispatch) => {
  try {
    await api
      .users(1, "ir")
      .then((res) => dispatch(sharedActions.successUsers(res.data.results)));
  } catch (e) {
    console.log("error has happend!!");
  }
};
