import {
  combineReducers,
  configureStore,
  ThunkAction,
  Action,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { walletReducer } from '../utils/ReduxSlices/walletSlice';
import { NFTsCounterReducer } from '../utils/ReduxSlices/NFTsCounterSlice';

const persistConfig = {
  key: 'persist-key',
  storage,
};

const rootReducer = combineReducers({
  wallet: walletReducer,
  NFTsCounter: NFTsCounterReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
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
