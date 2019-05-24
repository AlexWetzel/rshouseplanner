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

  function changeRoom(name, roomData, selectRoom, rooms) {
    dispatch({ type: types.selectHotSpot, payload: "none" });

    const roomName = toCamelCase(name);
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

  function changeBuild(name, hsName, selectRoom) {
    const build = name;

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
    const house = {
      rooms: state.rooms
    }
    const id = state.id;
    console.log("save room id: ", id)
    axios
      .post("/db/save", {house, id})
      .then(res => {
        console.log(res.data.message);
        const { id } = res.data;
        if (id) {
          localStorage.setItem("id", id);
          dispatch({ type: types.setId, payload: id })
        }
      })
      .catch(err => console.log(err))
  }

  function findHouse(id) {
    console.log("id:", id)
    dispatch({type: types.setId, payload: id})
    axios
      .get("/db/find", {
        params: {id}
      })
      .then(res => {
        console.log(res);
        const { house } = res.data;
        dispatch({type: types.swapRooms, payload: house})
      })
  }

  return {
    test,
    selectRoom,
    swapRooms,
    changeRoom,
    changeBuild,
    saveRooms,
    findHouse
  };
}