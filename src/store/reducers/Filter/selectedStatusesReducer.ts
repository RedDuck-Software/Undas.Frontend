import { Filter, Status } from "./types";

const initialState = {
  selectedStatuses: [],
}

export const selectedStatusesReducer = (state: any = initialState, action: any) => {
    switch (action.type) {
      case Filter.addStatus:
        if(state.selectedStatuses.find((status: any) => status["statusName"] == action.payload.statusName) !== undefined) {
            return {
                ...state,
                selectedStatuses: [...state.selectedStatuses.filter((item: Status) => item.statusName !== action.payload.statusName)]
            }
        }
        const newState = [...state.selectedStatuses, action.payload]
        return {
          ...state,
          selectedStatuses: newState
        };
      case Filter.removeStatus:
        const newSelectedStatuses = [...state.selectedStatuses.filter((item: Status) => item.statusName !== action.payload)]
        return {
            ...state,
            selectedStatuses: newSelectedStatuses
        };
      case Filter.clearAll:
        return {
            ...state,
            selectedStatuses: []
        }
      default:
        return state;
    }
};