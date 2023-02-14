const ON_ERROR = "ON_ERROR";
const OFF_ERROR = "OFF_ERROR";

const initialState = {
  error: false,
};

export const ErrorReducer = (state = initialState, action) => {
  switch (action.type) {
    case ON_ERROR:
      return { ...state, error: true };
    case OFF_ERROR:
      return { ...state, error: false };

    default:
      return state;
  }
};

export const onErrorRequest = (payload) => ({
  type: ON_ERROR,
  payload,
});
