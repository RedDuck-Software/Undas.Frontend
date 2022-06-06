import {
  CLOSE_MODAL,
  OPEN_BUY_MODAL,
  OPEN_MODAL,
  SET_COMPONENT_BUY,
} from '../saga/types';

const initialState = {
  open: false,
  currentComponent: '',
  tokenId: null,
  priceInNum:null,
  tokenURI:null,
  name:null
};

export const modalReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        open: true,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        open: false,
      };
    case SET_COMPONENT_BUY:
      return {
        ...state,
        open: true,
        currentComponent: 'buy',
        tokenId: action.tokenId,
        priceInNum:action.priceInNum,
        tokenURI:action.tokenURI,
        name:action.name
      };
    default:
      return state;
  }
};
