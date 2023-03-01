import axios from "axios";
import {
  getAuthReducer,
  getErrorAuthReducer,
  loadingAuthReducer,
} from "./authReducer";

export const AuthSlice = () => async (dispatch) => {
  dispatch(loadingAuthReducer());
  try {
    const results = await axios.post(
      "https://strapi.cleverland.by/api/auth/local/register"
    );
    await dispatch(getAuthReducer(results));
  } catch (err) {
    dispatch(getErrorAuthReducer(err));
  }
};
