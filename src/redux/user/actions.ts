import { AppThunk } from "../store";
import { userActions } from "./slice";
import api from "./api";

export const fetchUser = (): AppThunk => async (dispatch) => {
  try {
    dispatch(userActions.setLoading(true));
    const { data } = await api.user();
    dispatch(userActions.setUser(data));
    dispatch(userActions.setLoading(false));
  } catch (e) {
    dispatch(userActions.setError(true));
  }
};
