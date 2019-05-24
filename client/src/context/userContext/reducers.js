const initialState = {
  name: "",
  skills: {}
};

const types = {
  setPlayer: "SET_PLAYER"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.setPlayer:
      // const { name, skills } = action.payload
      console.log(action);
      console.log(action.payload);
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