import { CreateNFT, Item } from "./types";

const initialState = {
  levels: [],
}

export const levelReducer = (state = initialState, action: any) => {
    switch (action.type) {  
      case CreateNFT.addLevel:
        return {
          ...state,
          levels: [...state.levels, action.payload]
        };
      case CreateNFT.removeLevel:
        const newLevels = [...state.levels.filter((item: Item) => item.id !== action.payload)]
        return {
            ...state,
            levels: newLevels
        };
      case CreateNFT.editLevel:
        const editedItem = {id: action.id, propertyType: action.propertyType, propertyName: action.propertyName}
        return {
          ...state,
          ...state.levels.slice(0, action.id),
          editedItem,
          ...state.levels.slice(action.id + 1),
        };
      default:
        return state;
    }
};