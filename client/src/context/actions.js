import { types } from './reducers';

export const useActions = (state, dispatch) => {
  function test() {
    dispatch({ type: types.test});
  }

  function selectRoom(room) {
    dispatch({ type: types.selectHotSpot, payload: "none" });
    dispatch({ type: types.selectRoom, payload: room })
  }

  function swapRooms(e, newCoords, rooms) {
    let oldCoords = e.dataTransfer.getData("coordinates");
    console.log(oldCoords, newCoords)
    let newRooms = rooms.map(room => {
      if (room.coordinates === oldCoords) {
        room.coordinates = newCoords;        
      }
      else if (room.coordinates === newCoords) {
        room.coordinates = oldCoords;
      }
      return room
    });

    dispatch({ type: types.swapRooms, payload: newRooms });
  }

  function changeRoom(e, roomData, selectRoom, rooms) {
    dispatch({ type: types.selectHotSpot, payload: "none" });

    const roomName = e.target.value;
    console.log('room Name:', roomName);
    const room = roomData[roomName.toLowerCase()];
    console.log('room data:', room);
    console.log('selectRoom: ', selectRoom)
    
    const newRoom = {
      name: room.name,
      coordinates: selectRoom.coordinates
    }

    const roomIsHere = rooms.find( r => {return r.coordinates === selectRoom.coordinates})
    // Remove room
    if (roomName === 'No room') {

    }
    // Replace room
    else if(roomIsHere){
      // dispatch({ type: types.swapRooms, payload: newRoom })
    } 
    // Add room
    else {
      dispatch({ type: types.addRoom, payload: newRoom })
    }
    // const newRoom = 'This is a test'
    // console.log('new room: ',newRoom)

    dispatch({ type: types.selectRoom, payload: newRoom })
  }

  return {
    test,
    selectRoom,
    swapRooms,
    changeRoom
  };
}