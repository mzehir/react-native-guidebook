import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: 1,
};

export const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1;
    },

    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += action.payload;
    },
  },
});

export const {increment, incrementByAmount} = exampleSlice.actions;

export default exampleSlice.reducer;
