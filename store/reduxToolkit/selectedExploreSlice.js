const {createSlice} = require('@reduxjs/toolkit');

const selectedExploreSlice = createSlice({
  name: 'selectedxplore',
  initialState: [],
  reducers: {
    addExploreToSelected(state, action) {
      console.log('dfghjk', state);
      state.push(action.payload);
    },
    removeExploreFromSelected(state, action) {
      const index = state.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
      }
    },
  },
});

export const {addExploreToSelected, removeExploreFromSelected} =
  selectedExploreSlice.actions;
export default selectedExploreSlice.reducer;
