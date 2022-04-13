import {OPEN_MODAL, CLOSE_MODAL, SET_COMPONENT_BUY} from "../saga/types";

export function openModal() {
    return { type: OPEN_MODAL }
}

export function closeModal() {
    return { type: CLOSE_MODAL }
}

export function setComponent(component: any) {
    switch (component) {
        case 'buy':
            return { type: SET_COMPONENT_BUY }
        default:
            return component
    }
}
