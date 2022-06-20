import { OPEN_MODAL, CLOSE_MODAL, SET_COMPONENT_BUY,SET_COMPONENT_RENT,SET_ADDITIONAL_PAGE_FOR_SALE,SET_ADDITIONAL_PAGE_FOR_RENT } from '../saga/types';

export function openModal() {
  return { type: OPEN_MODAL };
}

export function closeModal() {
  return { type: CLOSE_MODAL };
}

export function setComponent(component: any, tokenId?: number,
   priceInNum?: any, tokenURI?: string, name?: string,premiumInNum?:number,colloteralWei?:number ) {
  //todo:rent NFT EVENT 
  switch (component) {
    case 'buy':
      return { type: SET_COMPONENT_BUY, tokenId: tokenId, priceInNum: priceInNum, tokenURI:tokenURI, name:name };

    case 'additional-page-for-sale':{
      return {type:SET_ADDITIONAL_PAGE_FOR_SALE, tokenId: tokenId, priceInNum: priceInNum, tokenURI:tokenURI, name:name };
    }
    case 'additional-page-for-rent':{
      return {type:SET_ADDITIONAL_PAGE_FOR_RENT,tokenId: tokenId, premiumInNum: premiumInNum, tokenURI:tokenURI, name:name, colloteral:colloteralWei};
    }
    case 'offer-rent':{
      return {type:SET_COMPONENT_RENT, tokenId: tokenId, premiumInNum: premiumInNum, tokenURI:tokenURI, name:name, colloteral:colloteralWei};
    }  
    default:   
    return component;
  }
}   
