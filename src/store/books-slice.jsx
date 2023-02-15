import axios from "axios";
import { getBooksRequest, loadingBooksRequest, errorBooksRequest } from "./booksReducer";

export const BooksSlice = () => async (dispatch) => {
  dispatch(loadingBooksRequest())
  try {
    const bookSearchRequest = await axios.get(
      "https://strapi.cleverland.by/api/books"
    );
    await dispatch(getBooksRequest(bookSearchRequest));
  }
  catch {
    errorBooksRequest()
  }

};
