import { createSlice } from '@reduxjs/toolkit';

export const walletSlice = createSlice({
  name: 'wallet',
  initialState: null,
  reducers: {
    setWalletState: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

export const { setWalletState } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
