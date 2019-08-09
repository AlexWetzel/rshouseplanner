import { types } from "./reducers";
import axios from "axios";

import { getBuildItems } from "../../helpers/itemHelpers";

export const useActions = (state, itemState, dispatch) => {
  function selectRoom(room) {
    dispatch({ type: types.selectHotSpot, payload: "none" });
    dispatch({ type: types.selectRoom, payload: room });
  }

  function swapRooms(e, newCoords) {
    const { rooms } = state;
    let oldCoords = e.dataTransfer.getData("coordinates");
    console.log(oldCoords, newCoords);
    let newRooms = rooms.map(room => {
      if (room.coordinates === oldCoords) {
        room.coordinates = newCoords;
      } else if (room.coordinates === newCoords) {
        room.coordinates = oldCoords;
      }
      return room;
    });

    dispatch({ type: types.swapRooms, payload: newRooms });
  }

  function changeRoom(name) {
    const { selectedRoom, rooms } = state;
    dispatch({ type: types.selectHotSpot, payload: "none" });

    const newRoom = {
      name: name,
      coordinates: selectedRoom.coordinates,
      cost: 0,
      orientation: "north",
      builds: []
    };

    const roomIndex = rooms.findIndex(
      r => r.coordinates === selectedRoom.coordinates
    );

    // Remove room
    if (name === "---") {
      const newRooms = rooms.map(r => {
        return r;
      });
      newRooms.splice(roomIndex, 1);
      dispatch({ type: types.swapRooms, payload: newRooms });
      console.log(newRooms);
    }
    // Replace room
    else if (roomIndex !== -1) {
      const newRooms = rooms.map(r => {
        if (r.coordinates === selectedRoom.coordinates) {
          return newRoom;
        } else return r;
      });
      dispatch({ type: types.swapRooms, payload: newRooms });
    }
    // Add room
    else {
      dispatch({ type: types.addRoom, payload: newRoom });
    }

    dispatch({ type: types.selectRoom, payload: newRoom });
  }

  function changeBuild(name, hsName) {
    const build = name;
    const { selectedRoom } = state;

    const newBuild = {
      name: build,
      hotSpot: hsName,
      cost: 0
    };

    const buildIndex = selectedRoom.builds.findIndex(b => b.hotSpot === hsName);

    const newRoom = {
      ...selectedRoom
    };

    

    if (build === "---") {
      /*
       * If an empty build is selected on an empty hotspot 
       * while another build exists in the same room, then that other
       * build will be erased, so the next if statement prevents
       * such behavior 
      */
      if (buildIndex === -1) {return}

      newRoom.builds.splice(buildIndex, 1);
    } else if (buildIndex !== -1) {
      const newBuilds = selectedRoom.builds.map(b => {
        if (b.hotSpot === hsName) {
          return newBuild;
        } else return b;
      });
      newRoom.builds = newBuilds;
    } else {
      newRoom.builds.push(newBuild);
    }

    const roomItemList = getBuildItems(newRoom, itemState.items);

    let totalCost = 0;
    roomItemList.forEach(i => {
      totalCost += i.priceNum * i.quantity;
    });

    newRoom.cost = totalCost;

    dispatch({ type: types.changeRoom, payload: newRoom });
    dispatch({ type: types.selectRoom, payload: newRoom });
  }

  function saveRooms() {
    const house = {
      rooms: state.rooms
    };
    const id = state.id;
    axios
      .post("/db/save", { house, id })
      .then(res => {
        console.log(res.data.message);
        const { id } = res.data;
        if (id) {
          localStorage.setItem("id", id);
          dispatch({ type: types.setId, payload: id });
        }
      })
      .catch(err => console.log(err));
  }

  function findHouse(id) {
    dispatch({ type: types.setId, payload: id });
    axios
      .get("/db/find", {
        params: { id }
      })
      .then(res => {
        console.log(res);
        const { house } = res.data;
        dispatch({ type: types.swapRooms, payload: house });
      });
  }

  function calculateRoomCost(items) {
    let totalCost = 0;
    items.forEach(i => {
      totalCost += i.priceNum * i.quantity;
    });

    const newRoom = {
      ...state.selectedRoom,
      cost: totalCost
    };

    dispatch({ type: types.changeRoom, payload: newRoom });
    dispatch({ type: types.selectRoom, payload: newRoom });
  }

  function rotateRoom(rotationDirection) {
    const rotationMachine = {
      north: {
        ROTATE_CLOCKWISE: "east",
        ROTATE_COUNTERCLOCKWISE: "west"
      },
      east: {
        ROTATE_CLOCKWISE: "south",
        ROTATE_COUNTERCLOCKWISE: "north"
      },
      south: {
        ROTATE_CLOCKWISE: "west",
        ROTATE_COUNTERCLOCKWISE: "east"
      },
      west: {
        ROTATE_CLOCKWISE: "north",
        ROTATE_COUNTERCLOCKWISE: "south"
      }
    };

    const orientation = state.selectedRoom.orientation;
    const rotate = rotationMachine[orientation][rotationDirection];

    if (rotate) {
      const newRoom = {
        ...state.selectedRoom,
        orientation: rotate
      };
      dispatch({ type: types.changeRoom, payload: newRoom });
      dispatch({ type: types.selectRoom, payload: newRoom });
    }
  }

  return {
    selectRoom,
    swapRooms,
    changeRoom,
    changeBuild,
    saveRooms,
    findHouse,
    calculateRoomCost,
    rotateRoom
  };
};
