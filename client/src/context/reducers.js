const initialState = {
  message: 'Hello'
};


const types = {
  test: 'TEST'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.test:
      console.log(state.message)
      return state.message;
    default:
      return state;
  }
}

export { initialState, types, reducer };