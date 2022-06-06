import { CreateNFT, Item } from "./types";

const initialState = {
  stats: []
}

export const statReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case CreateNFT.addStat:
      return {
        ...state,
        stats: [...state.stats, action.payload]
      };
    case CreateNFT.removeStat:
      const newStats = [...state.stats.filter((item: Item) => item.id !== action.payload)]
      return {
          ...state

      };
    case CreateNFT.editStat:
      const editedItem = {id: action.id, propertyType: action.propertyType, propertyName: action.propertyName}
      return {
          ...state,
          ...state.stats.slice(0, action.id),
          editedItem,
          ...state.stats.slice(action.id + 1),
        };
    default:
      return state;
  }
};