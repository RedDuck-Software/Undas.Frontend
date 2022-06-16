import { RootState } from "../.."

export const useSelectedCollections = (state: RootState) => {
    return (state.selectedCollections as any).selectedCollections;
}

export const useSelectedCategories = (state: RootState) => {
    return (state.selectedCategories as any).selectedCategories;
}