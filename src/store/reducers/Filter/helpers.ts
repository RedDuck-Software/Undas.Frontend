import { RootState } from "../.."

export const useSelectedCollections = (state: RootState) => {
    return (state.properties as any).selectedCollections;
}

