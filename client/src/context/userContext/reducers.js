const initialState = {
  name: "",
  skills: {
    Construction: {level: 99}
  }
};

const types = {
  setPlayer: "SET_PLAYER"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setPlayer:
      return {
        ...state, 
        name: action.payload.name,
        skills: action.payload.skills
      };
    default:
      return state;
  }
};

export { initialState, types, reducer };