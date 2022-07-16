
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
import { stackingReducer } from './reducers/Filter/stakingReducer';
import { selectedCollectionsReducer } from './reducers/Filter/selectedCollectionsReducer';
import { modalReducer } from './reducers/modalReducer';
import { rootSaga } from './saga/rootSaga';
import { selectedCategoriesReducer } from './reducers/Filter/selectedCategoriesReducer';
import { buyingReducer } from './reducers/Filter/buyReducer';
import { hasOffersReducer } from './reducers/Filter/hasOffersReducer';
import { selectedStatusesReducer } from './reducers/Filter/selectedStatusesReducer';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'persist-key',
  storage,
};

const rootReducer = combineReducers({
  modal: modalReducer,
  // create nft & collection
  levels: levelReducer,
  properties: propertyReducer,
  stats: statReducer,
  // filter
  stacking: stackingReducer,
  buying: buyingReducer,
  hasOffers: hasOffersReducer,
  selectedStatuses: selectedStatusesReducer,
  selectedCollections: selectedCollectionsReducer,
  selectedCategories: selectedCategoriesReducer,
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

export const useModal = (state: RootState) => {
  return state.modal;
};

export const useToken = (state: RootState) => {
    
  return state.modal.tokenId;
};

export const usePrice = (state: RootState) => {
    
  return state.modal.priceInNum;
};
export const useName = (state: RootState) => {
    
  return state.modal.name;
};
export const useUri = (state: RootState) => {
    
  return state.modal.tokenURI;
};
export const useColloteral = (state: RootState) => {
    
  return state.modal.colloteral;
};
export const usePremium = (state: RootState) => {
    
  return state.modal.premium;
};
// export const useColloteral = (state: RootState) => {
    
//   return state.modal;
// };
// export const usePremium = (state: RootState) => {
    
//   return state.modal.;
// };
/*
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType,
    RootState,
    unknown,
    Action<string>>;

export {useAppSelector} from './hooks';
*/
