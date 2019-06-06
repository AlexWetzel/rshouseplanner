const initialState = {
  items: [],
};

const types = {
  updateItems: 'UPDATE_ITEMS'
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.updateItems:
      return {
        ...state,
        items: action.payload
      }
    default:
      return state;
  }
};

export { initialState, types, reducer };
