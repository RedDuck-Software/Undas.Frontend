import { OPEN_MODAL, CLOSE_MODAL, SET_COMPONENT_BUY,SET_COMPONENT_RENT } from '../saga/types';

export function openModal() {
  return { type: OPEN_MODAL };
}

export function closeModal() {
  return { type: CLOSE_MODAL };
}

export function setComponent(component: any, tokenId?: number,
   priceInNum?: number, tokenURI?: string, name?: string,premiumInNum?:number,colloteral?:number ) {

  //todo:rent NFT EVENT 
  switch (component) {
    case 'buy':
      return { type: SET_COMPONENT_BUY, tokenId: tokenId, priceInNum: priceInNum, tokenURI:tokenURI, name:name };

    // case 'rent':{
    //   return {type:SET_COMPONENT_RENT, tokenId: tokenId, premiumInNum: premiumInNum, tokenURI:tokenURI, name:name, colloteral:colloteral };
    // }
    
    case 'offer-rent':{
      return {type:SET_COMPONENT_RENT, tokenId: tokenId, premiumInNum: premiumInNum, tokenURI:tokenURI, name:name, colloteral:colloteral };
    }  
    default:   
    return component;
  }
}   
