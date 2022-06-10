import { RootState } from "../.."

export const useProperties = (state: RootState) => {
    return (state.properties as any).properties;
}

export const useLevels = (state: RootState) => {
    return (state.levels as any).levels;
}

export const useStats = (state: RootState) => {
    return (state.stats as any).stats;
}