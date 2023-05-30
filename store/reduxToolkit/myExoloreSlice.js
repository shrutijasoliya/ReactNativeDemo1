const {createSlice} = require('@reduxjs/toolkit');

const myExploreSlice = createSlice({
  name: 'explore',
  initialState: [],
  reducers: {
    addExploreToRedux(state, action) {
      if (state.length < 3) {
        state.push(action.payload);
      } else {
      }
    },
    setExploreChecked(state, action) {
      state = state.map((item, index) => {
        if (item.id == action.payload.id) {
          console.log('bhai avyu....', item);
          return {...item, ischecked: true};
        } else {
          return item;
        }
      });
    },
  },
});

export const {addExploreToRedux, setExploreChecked} = myExploreSlice.actions;
export default myExploreSlice.reducer;
