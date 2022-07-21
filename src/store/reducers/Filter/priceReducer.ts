import { Filter } from "./types";

const initialState = {
  price: {min: "", max: ""},
};

export const priceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case Filter.setPrice:
        console.log("PRICE REDUCER")
        console.log(action.payload)
      return { 
        ...state, 
        price: {...action.payload}
      };
    default:
      return state;
  }
};

