import { Filter, Collection } from "./types";

const initialState = {
  selectedCollections: [],
}

export const selectedCollectionsReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
      case Filter.addCollection:
        if(state.selectedCollections.find((collection: any) => collection["collectionName"] == action.payload.collectionName) !== undefined) {
            return {
                ...state,
                selectedCollections: [...state.selectedCollections.filter((item: Collection) => item.collectionName !== action.payload.collectionName)]
            }
        }
        console.log("state", state);
        return {
          ...state,
          selectedCollections: [...state.selectedCollections, action.payload]
        };
      case Filter.removeCollection:
        const newSelectedCollections = [...state.selectedCollections.filter((item: Collection) => item.collectionName !== action.payload)]
        return {
            ...state,
            selectedCollections: newSelectedCollections
        };
      case Filter.removeAllCollection:
        return {
            ...state,
            selectedCollections: []
        }
      default:
        return state;
    }
};