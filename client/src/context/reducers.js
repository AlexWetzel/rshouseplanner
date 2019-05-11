const initialState = {
  message: "Hello",
  rooms: [
    {
      name: "Bedroom",
      coordinates: "1,2",
      builds: []
    },
    {
      name: "Garden",
      coordinates: "2,4",
      builds: []
    }
  ],
  selectedRoom: null,
  selectedHotSpot: null
};

const types = {
  test: "TEST",
  selectRoom: "SELECT_ROOM",
  swapRooms: "SWAP_ROOMS",
  selectHotSpot: "SELECT_HOTSPOT",
  addRoom: "ADD_ROOM",
  changeRoom: "CHANGE_ROOM",
  addBuild: "ADD_BUILD"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.test:
      console.log(state.message);
      return state.message;
    case types.swapRooms:
      console.log("new rooms", action.payload);
      return {
        ...state,
        rooms: action.payload
      };
    case types.selectRoom:
      return {
        ...state,
        selectedRoom: action.payload
      };
    case types.selectHotSpot:
      return {
        ...state,
        selectedHotSpot: action.payload
      };
    case types.addRoom:
      return {
        ...state,
        rooms: [...state.rooms, action.payload]
      };
    case types.changeRoom:
      const newRooms = state.rooms.map(r => {
        if (r.coordinates === action.payload.coordinates){
          return action.payload;
        }
        else return r;
      })
      return {
        ...state,
        rooms: newRooms
      }
    default:
      return state;
  }
};

export { initialState, types, reducer };
