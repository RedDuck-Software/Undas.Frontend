import { configureStore } from '@reduxjs/toolkit'
import { walletReducer } from './utils/reduxSlices'

export default configureStore({
  reducer: { wallet: walletReducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['wallet/setWalletState'],
      },
    }),
})
