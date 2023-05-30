import {configureStore} from '@reduxjs/toolkit';
import myExoloreReducer from './myExoloreSlice';
import selectedExploreReducer from './selectedExploreSlice';

export const myStore = configureStore({
  reducer: {
    explore: myExoloreReducer,
    selectedExplore: selectedExploreReducer,
  },
});
