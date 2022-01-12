import { createSlice } from '@reduxjs/toolkit';

export interface WalletState {
  wallet: string | null;
}

const initialState: WalletState = {
  wallet: null,
};

export const walletSlice = createSlice({
  name: 'wallet',
  initialState,
  reducers: {
    setWalletState: (state, action) => {
      state.wallet = action.payload;
      return state;
    },
  },
});

export const { setWalletState } = walletSlice.actions;
export const walletReducer = walletSlice.reducer;
