export const TOGGLE_STACKING = 'TOGGLE_STACKING';

const initialState = {
  stacking: false,
};

export const filterReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TOGGLE_STACKING:
      return {
        stacking: action.payload,
      };
    default:
      return state;
  }
};

export const toggleStacking = (stacking: boolean) => {
  return (stacking = !stacking);
};

export const filterAction = (stacking: boolean) => ({
  type: TOGGLE_STACKING,
  payload: stacking,
});
