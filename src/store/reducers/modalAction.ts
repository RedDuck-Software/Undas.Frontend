import { OPEN_MODAL, CLOSE_MODAL, SET_COMPONENT_BUY } from '../saga/types';

export function openModal() {
  return { type: OPEN_MODAL };
}

export function closeModal() {
  return { type: CLOSE_MODAL };
}

export function setComponent(component: any, tokenId?: number, priceInNum?: number) {
  console.log()
  console.log("price in ",priceInNum)
  
  switch (component) {
    case 'buy':
      return { type: SET_COMPONENT_BUY, tokenId: tokenId, priceInNum: priceInNum };
    default:
      return component;
  }
}
