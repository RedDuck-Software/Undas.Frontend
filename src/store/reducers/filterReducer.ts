export const TOGGLE_STACKING = 'TOGGLE_STACKING'


const initialState = {
    stacking: false
}

export const filterReducer = (state = initialState, action: any)  => {
    console.log(state)
    switch (action.type) {
        case TOGGLE_STACKING:
            return {
                stacking: action.payload
            }
        default:
            return state
    }
}

export const toggleStacking = (stacking: boolean) => {
    console.log(stacking)
    return stacking = !stacking
}

export const filterAction = (stacking: boolean) => ({
    type: TOGGLE_STACKING,
    payload: stacking
})