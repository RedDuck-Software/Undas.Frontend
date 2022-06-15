import { Filter, Collection } from "./types";
//import CollectionItemIco from "../../../icons/all-nfts.svg";
// /../../components/ASideFilter/icons/collection-item-ico.svg


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
        const newState = [...state.selectedCollections, action.payload]
        return {
          ...state,
          selectedCollections: newState
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