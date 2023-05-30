import {SET_SECOND_TRUE, SET_SECOND_FALSE} from './actiontypes';

const initialState = {second: true};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SECOND_TRUE:
      return {...state, second: !state.second};

    case SET_SECOND_FALSE:
      console.log('in reducer before state.second :  ', state.second);
      return {...state, second: !state.second};

    default:
      return state;
  }
};
