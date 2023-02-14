import axios from "axios";
import { getBooksRequest } from "./booksReducer";

export const BooksSlice = () => async (dispatch) => {
  const bookSearchRequest = await axios.get(
    "https://strapi.cleverland.by/api/books"
  );
  await dispatch(getBooksRequest(bookSearchRequest));
};
