// store.js
import { createStore } from 'redux';

// Define your action type
export const SAVE_USER_DATA = 'SAVE_USER_DATA';

// Initial state
const initialState = {
  user: {},
  // Other initial state properties if needed
};

// Reducer
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_USER_DATA:
      return {
        ...state,
        user: action.payload,
      };

    // Handle other actions if needed
    default:
      return state;
  }
};

// Create store with rootReducer
const store = createStore(rootReducer);

export default store;
