import axios from "axios";
import {
  getBooksRequest,
  loadingBooksRequest,
  errorBooksRequest,
  getCategoryBookRequest,
  getCurrentBookRequest,
} from "./booksReducer";

export const BooksSlice = () => async (dispatch) => {
  dispatch(loadingBooksRequest());
  try {
    const bookSearchRequest = await axios.get(
      "https://strapi.cleverland.by/api/books"
    );
    await dispatch(getBooksRequest(bookSearchRequest));
    await dispatch(CategoryOfBooksSlice);
  } catch (err) {
    dispatch(errorBooksRequest(err));
  }
};

export const CurrentBookSlice = (id) => async (dispatch) => {
  dispatch(loadingBooksRequest());
  try {
    const currentBookSearchRequest = await axios.get(
      `https://strapi.cleverland.by/api/books/${id}`
    );
    await dispatch(getCurrentBookRequest(currentBookSearchRequest));
  } catch (err) {
    dispatch(errorBooksRequest(err));
  }
};

export const CategoryOfBooksSlice = (categories) => async (dispatch) => {
  dispatch(loadingBooksRequest());
  try {
    const genreSearchRequest = await axios.get(
      `https://strapi.cleverland.by/api/categories`
    );
    await dispatch(getCategoryBookRequest(genreSearchRequest));
  } catch (err) {
    dispatch(errorBooksRequest(err));
  }
};
