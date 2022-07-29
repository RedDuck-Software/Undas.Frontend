import { Filter } from "./types";

const initialState = {
  search: "",
};

export const searchReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Filter.setSearch:
      return { 
        ...state, 
        search: action.payload
      };
    default:
      return state;
  }
};

