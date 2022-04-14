import {CLOSE_MODAL, OPEN_BUY_MODAL, OPEN_MODAL, SET_COMPONENT_BUY} from "../saga/types";

const initialState = {
    open: false,
    currentComponent: '',
}

export const modalReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case OPEN_MODAL:
            return {
                ...state,
                open: true,
            }
        case CLOSE_MODAL:
            return {
                ...state,
                open: false,
            }
        case SET_COMPONENT_BUY:
            return {
                ...state,
                open: true,
                currentComponent: 'buy',
            }
        default:
            return state
    }
}
