import { types } from './reducers';
import axios from 'axios';

import toCamelCase from '../../helpers/toCamelCase';

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

    const roomName = toCamelCase(e.target.value);
    console.log('room Name:', roomName);
    const room = roomData[roomName];
    console.log('room data:', room);
    console.log('selectRoom: ', selectRoom)
    
    const newRoom = {
      name: room.name,
      coordinates: selectRoom.coordinates,
      builds: []
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

  function changeBuild(e, hsName, selectRoom) {
    const build = e.target.value;

    const newBuild = {
      name: build,
      hotSpot: hsName
    }
    const hasBuild = selectRoom.builds.find(b => {return b.hotSpot === hsName});
    console.log('build', hasBuild)
    // Will this work?
    const newRoom = {...selectRoom};

    if (hasBuild) {
      const newBuilds = selectRoom.builds.map(b => {
        if(b.hotSpot === hsName) {
          return newBuild;
        }
        else return b;
      });
      newRoom.builds = newBuilds;

    
    }
    // else dispatch({ type: types.addBuild, payload: newBuild });
    else {
      newRoom.builds.push(newBuild);
    }
    console.log('New Room builds: ',newRoom.builds);
    dispatch({ type: types.changeRoom, payload: newRoom });
    dispatch({ type: types.selectRoom, payload: newRoom });
  }

  
  function saveRooms() {
    axios
      .get("/db/save")
      .then(res => console.log(res))
      .catch(err => console.log(err))
  }

  return {
    test,
    selectRoom,
    swapRooms,
    changeRoom,
    changeBuild,
    saveRooms
  };
}