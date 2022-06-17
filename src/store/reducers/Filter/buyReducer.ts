import { Filter } from "./types";

const initialState = {
  buying: false,
};

export const buyingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Filter.buying:
      return {
        buying: action.payload,
      };
    default:
      return state;
  }
};

export const toggleBuy= (buying: boolean) => {
  return (buying = !buying);
};

