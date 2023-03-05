import axios from "axios";
import {
  getAuthReducer,
  getErrorAuthReducer,
  loadingAuthReducer,
} from "./authReducer";

export const RegisterSlice = (data) => async (dispatch) => {
  dispatch(loadingAuthReducer());
  try {
    const results = await axios.post(
      "https://strapi.cleverland.by/api/auth/local/register",
      data
    );
    await dispatch(getAuthReducer(results));
  } catch (err) {
    dispatch(getErrorAuthReducer(err));
  }
};

export const AuthSlice = (data) => async (dispatch) => {
  dispatch(loadingAuthReducer());
  try {
    const results = await axios.post(
      "https://strapi.cleverland.by/api/auth/local",
      data
    );
    localStorage.setItem("auth", JSON.stringify(results));
    await dispatch(getAuthReducer(results));
  } catch (err) {
    dispatch(getErrorAuthReducer(err));
  }
};

export const RestorePasswordSlice = (data) => async (dispatch) => {
  dispatch(loadingAuthReducer());
  try {
    await axios.post(
      "https://strapi.cleverland.by/api/auth/forgot-password",
      data
    );
  } catch (err) {
    dispatch(getErrorAuthReducer(err));
  }
};
