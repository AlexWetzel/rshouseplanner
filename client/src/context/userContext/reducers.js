const initialState = {
  name: ""
};

const types = {
  setPlayer: "SET_PLAYER"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setPlayer:
      console.log(action);
      return {...state, name: action.payload};
    default:
      return state;
  }
};

export { initialState, types, reducer };