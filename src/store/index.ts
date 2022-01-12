import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';

import { walletReducer } from '../utils/ReduxSlices/walletSlice';
import { NFTsCounterReducer } from '../utils/ReduxSlices/NFTsCounterSlice';

const rootReducer = combineReducers({
  wallet: walletReducer,
  NFTsCounter: NFTsCounterReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export { useAppSelector } from './hooks';
