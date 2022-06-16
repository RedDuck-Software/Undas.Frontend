import { Filter, Category } from "./types";

const initialState = {
  selectedCategories: [],
}

export const selectedCategoriesReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
      case Filter.addCategory:
        if(state.selectedCategories.find((category: any) => category["categoryName"] == action.payload.categoryName) !== undefined) {
            return {
                ...state,
                selectedCategories: [...state.selectedCategories.filter((item: Category) => item.categoryName !== action.payload.categoryName)]
            }
        }
        const newState = [...state.selectedCategories, action.payload]
        return {
          ...state,
          selectedCategories: newState
        };
      case Filter.removeCategory:
        const newSelectedCategories = [...state.selectedCategories.filter((item: Category) => item.categoryName !== action.payload)]
        return {
            ...state,
            selectedCategories: newSelectedCategories
        };
      case Filter.clearAll:
        return {
            ...state,
            selectedCategories: []
        }
      default:
        return state;
    }
};