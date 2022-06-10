import { CreateNFT, Item } from "./types";

const initialState = {
  properties: [],
}

export const propertyReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case CreateNFT.addProperty:
        return {
          ...state,
          properties: [...state.properties, action.payload]
        };  
      case CreateNFT.removeProperty:
        const newProperties = [...state.properties.filter((item: Item) => item.id !== action.payload)]
        return {
          ...state,
          properties: newProperties
        };
    case CreateNFT.editProperty:
        const editedItem = {id: action.id, propertyType: action.propertyType, propertyName: action.propertyName};
        return {
            ...state,
            ...state.properties.slice(0, action.id),
            editedItem,
            ...state.properties.slice(action.id + 1),
        };
      default:
        return state;
    }
  };