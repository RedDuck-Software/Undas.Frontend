import {
  combineReducers,
  applyMiddleware,
  createStore,
} from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import { levelReducer } from './reducers/createNFT/levelReducer';
import { propertyReducer } from './reducers/createNFT/propertyReducer';
import { statReducer } from './reducers/createNFT/statReducer';


import { filterReducer } from './reducers/filterReducer';
import { modalReducer } from './reducers/modalReducer';
import { rootSaga } from './saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'persist-key',
  storage,
};

const rootReducer = combineReducers({
  filter: filterReducer,
  modal: modalReducer,
  levels: levelReducer,
  properties: propertyReducer,
  stats: statReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

/*export const store = configureStore({
    reducer: persistedReducer,
    middleware: () => {
        applyMiddleware(sagaMiddleware);
    }
});*/

export type RootState = ReturnType<typeof rootReducer>;

export const useFilter = (state: RootState) => {
  return state.filter;
};
export const useModal = (state: RootState) => {
  return state.modal;
};

export const useToken = (state: RootState) => {
  return state.modal.tokenId;
};
/*
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

export {useAppSelector} from './hooks';
*/
