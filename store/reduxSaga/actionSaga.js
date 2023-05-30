export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';
export const TOGGLE_IS_CHECKED = 'TOGGLE_IS_CHECKED';
// export const ADD_TO_SELECTED = 'TOGGLE_IS_CHECKED';

export const getUserRequest = () => ({
  type: GET_USER_REQUEST,
});

export const getUserSuccess = user => ({
  type: GET_USER_SUCCESS,
  payload: user,
});

export const getUserFailure = error => ({
  type: GET_USER_FAILURE,
  payload: error,
});

export const toggleIsChecked = id => ({
  type: TOGGLE_IS_CHECKED,
  payload: id,
});
