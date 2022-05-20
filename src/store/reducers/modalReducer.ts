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
      };
    default:
      return state;
  }
};
