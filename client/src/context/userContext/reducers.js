const initialState = {
  name: ""
};

const types = {
  searchPlayer: "SEARCH_PLAYER"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.searchPlayer:
      console.log(action);
      return {...state, name: action.payload};
    default:
      return state;
  }
};

export { initialState, types, reducer };