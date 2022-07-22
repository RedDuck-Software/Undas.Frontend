import { Filter } from "./types";

const initialState = {
  newNfts: false,
};

export const newReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Filter.new:
      return {
        newNfts: action.payload,
      };
    default:
      return state;
  }
};

export const toggleNew = (newNfts: boolean) => {
  return (newNfts = !newNfts);
};

