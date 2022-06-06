import { CreateNFT } from "./types";

const initialState = {
  properties: [],
  levels: [],
  stats: []
}

export const createNFTReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case CreateNFT.add:
        return {
          ...state,
        };
      case CreateNFT.remove:
        return {
          ...state,
          ...state?.filter((item: any) => item.id !== action.propertyId),
        };
      case CreateNFT.edit:
        return {
          ...state,
        };
      default:
        return state;
    }
  };