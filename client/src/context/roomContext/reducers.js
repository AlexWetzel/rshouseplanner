const initialState = {
  id: null,
  rooms: [],
  selectedFloor: 0,
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
  addBuild: "ADD_BUILD",
  setId: "SET_ID",
  selectFloor: "SELECT_FLOOR"
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
        if (r.coordinates === action.payload.coordinates) {
          return action.payload;
        } else return r;
      });
      return {
        ...state,
        rooms: newRooms
      };
    case types.setId:
      return {
        ...state,
        id: action.payload
      };
    case types.selectFloor:
      return {
        ...state,
        selectedFloor: action.payload
      };
    default:
      return state;
  }
};

export { initialState, types, reducer };
