import { Filter } from "./types";
/**
 * REFACTOR NAMINGS TO RENT
 * IT'S NOT A STAKING
 * IT'S A RENT
 */
const initialState = {
  stacking: false,
};

export const stackingReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Filter.staking:
      return {
        stacking: action.payload,
      };
    default:
      return state;
  }
};

export const toggleStacking = (stacking: boolean) => {
  return (stacking = !stacking);
};

