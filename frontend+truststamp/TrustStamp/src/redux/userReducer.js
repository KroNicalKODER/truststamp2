// userReducer.js
import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  SAVE_USER_DATA,
} from "./userActions";

const initialState = {
  user: {},
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, user: {}, error: action.payload };
    case SAVE_USER_DATA:
      return { ...state, user: action.payload, loading: false, error: null };
    default:
      return state;
  }
};

export default userReducer;
