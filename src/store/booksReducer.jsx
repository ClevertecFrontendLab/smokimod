const GET_BOOKS = "GET_BOOKS";

const initialState = {
  books: [],
};

export const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return { ...state, loading: false, books: action.payload.data };

    default:
      return state;
  }
};

export const getBooksRequest = (payload) => ({
  type: GET_BOOKS,
  payload,
});
