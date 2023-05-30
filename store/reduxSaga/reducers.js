import {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  TOGGLE_IS_CHECKED,
} from './actionSaga';

// Define the initial state
const initialState = {
  isError: false,
  isLoading: true,
};

// Define the getUserReducer function
const getUserReducer = (state = initialState, action) => {
  switch (action.type) {
    // Start fetching user data
    case GET_USER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    // Fetch user data successfully
    case GET_USER_SUCCESS:
      let data = action.payload.map(val => ({...val, ischecked: false}));
      return {
        ...state,
        isError: false,
        isLoading: false,
        data: data,
      };
    // Failed to fetch user data
    case GET_USER_FAILURE:
      return {
        ...state,
        isError: true,
        isLoading: false,
        error: action.payload,
      };
    // Toggle ischecked
    case TOGGLE_IS_CHECKED:
      let tempData = state.data.map((val, i) => {
        return val.id == action.payload
          ? {...val, ischecked: !val.ischecked}
          : val;
      });
      return {
        ...state,
        data: tempData,
      };
    // Return the current state for any other action types
    default:
      return state;
  }
};

export default getUserReducer;
