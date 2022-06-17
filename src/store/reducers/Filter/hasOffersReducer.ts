import { Filter } from "./types";

const initialState = {
  hasOffers: false,
};

export const hasOffersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Filter.hasOffers:
      return {
        hasOffers: action.payload,
      };
    default:
      return state;
  }
};

export const toggleHasOffer = (hasOffers: boolean) => {
  return (hasOffers = !hasOffers);
};

