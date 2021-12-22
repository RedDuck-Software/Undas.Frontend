import { configureStore, createSlice } from '@reduxjs/toolkit';

const walletSlice = createSlice({
  name: 'wallet',
  initialState: null,
  reducers: {
    set: (state) => {
      return state;
    },
  },
});
export const { set } = walletSlice.actions;
export default configureStore({
  reducer: { wallet: walletSlice.reducer },
});
