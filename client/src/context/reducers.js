const initialState = {
  message: 'Hello',
  rooms: [
    {
      name: "Bedroom",
      coordinates: "1,2"
    },
    {
      name: "Garden",
      coordinates: "2,4"
    }
  ],
  selectedRoom: null,
  selectedHotSpot: null
};

const types = {
  test: 'TEST',
  selectRoom: 'SELECT_ROOM',
  swapRooms: 'SWAP_ROOMS',
  selectHotSpot: 'SELECT_HOTSPOT'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.test:
      console.log(state.message)
      return state.message;
    case types.swapRooms:
      console.log(action.payload)
      return {
        ...state,
        rooms: action.payload
      }
    case types.selectRoom:
      return {
        ...state,
        selectedRoom: action.payload
      };
    default:
      return state;
  }
}

export { initialState, types, reducer };