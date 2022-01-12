import { createSlice } from '@reduxjs/toolkit';

export interface NFTsCounterState {
  value: number;
}

const initialState: NFTsCounterState = {
  value: 0,
};

export const NFTsCounterSlice = createSlice({
  name: 'NFTsCounter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = NFTsCounterSlice.actions;
export const NFTsCounterReducer = NFTsCounterSlice.reducer;
