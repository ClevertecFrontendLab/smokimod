const GET_BOOKS = "GET_BOOKS";
const LOADING_BOOKS = "LOADING_BOOKS";
const ERROR_BOOKS = "ERROR_BOOKS";


const initialState = {
  books: [],
  loading: false,
  error: false,
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, loading: false, books: action.payload.data };
    case LOADING_BOOKS:
      return { ...state, loading: true }
    case ERROR_BOOKS:
      return { ...state, loading: false, error: true }
    default:
      return state;
  }
};

export const getBooksRequest = (payload) => ({
  type: GET_BOOKS,
  payload,
});
export const loadingBooksRequest = (payload) => ({
  type: LOADING_BOOKS,
  payload,
});
export const errorBooksRequest = (payload) => ({
  type: ERROR_BOOKS,
  payload,
});
