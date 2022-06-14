import { RootState } from "../.."

export const useSelectedCollections = (state: RootState) => {
    return (state.selectedCollections as any).selectedCollections;
}

