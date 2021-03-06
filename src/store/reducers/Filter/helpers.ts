import { RootState } from "../.."

export const useSearch = (state: RootState) => {
    return state.search.search
}

export const useNew = (state: RootState) => {
    return state.newNfts;
}

export const useRent = (state: RootState) => {
    return state.stacking;
};

export const useBuy = (state: RootState) => {
    return state.buying;
}

export const useHasOffers = (state: RootState) => {
    return state.hasOffers;
}

export const usePriceFilter = (state: RootState) => {
    return state.price.price;
}

export const useSelectedStatuses = (state: RootState) => {
    return (state.selectedStatuses as any).selectedStatuses;
}

export const useSelectedCollections = (state: RootState) => {
    return (state.selectedCollections as any).selectedCollections;
}

export const useSelectedCategories = (state: RootState) => {
    return (state.selectedCategories as any).selectedCategories;
}