import { RootState } from "../.."

export const useRent = (state: RootState) => {
    return state.stacking;
};

export const useBuy = (state: RootState) => {
    return state.buying;
}

export const useHasOffers = (state: RootState) => {
    return state.hasOffers;
}

export const useSelectedStatuses = (state: RootState) => {
    return (state.selectedStatuses as any).selectedStatuses
}

export const useSelectedCollections = (state: RootState) => {
    return (state.selectedCollections as any).selectedCollections;
}

export const useSelectedCategories = (state: RootState) => {
    return (state.selectedCategories as any).selectedCategories;
}