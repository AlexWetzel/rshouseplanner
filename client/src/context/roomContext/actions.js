import { types } from "./reducers";
import axios from "axios";

import * as roomData from "../../data/roomData";

import { toCamelCase, shortPriceToLong } from "../../helpers/parsers";

export const useActions = (state, itemState, dispatch) => {
  function selectRoom(room) {
    dispatch({ type: types.selectHotSpot, payload: "none" });
    dispatch({ type: types.selectRoom, payload: room });
  }

  function swapRooms(e, newCoords, rooms) {
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

  function changeRoom(name, roomData, selectRoom, rooms) {
    dispatch({ type: types.selectHotSpot, payload: "none" });

    const newRoom = {
      name: name,
      coordinates: selectRoom.coordinates,
      cost: 0,
      orientation: "north",
      builds: []
    };

    const roomIndex = rooms.findIndex(
      r => r.coordinates === selectRoom.coordinates
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
        if (r.coordinates === selectRoom.coordinates) {
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

    const newBuild = {
      name: build,
      hotSpot: hsName,
      cost: 0
    };

    const buildIndex = state.selectedRoom.builds.findIndex(b => b.hotSpot === hsName);
   
    const newRoom = {
      ...state.selectedRoom,
    }
      
    if (build === "---") {
      newRoom.builds.splice(buildIndex, 1);
    } else if (buildIndex !== -1) {
      const newBuilds = selectRoom.builds.map(b => {
        if (b.hotSpot === hsName) {
          return newBuild;
        } else return b;
      });
      newRoom.builds = newBuilds;
    } else {
      newRoom.builds.push(newBuild);
    }

    const roomItemList = getBuildItems(newRoom, itemState.items);
    console.log(roomItemList);

    let totalCost = 0;
    roomItemList.forEach(i => {
      totalCost += (i.priceNum * i.quantity);
    })

    console.log(totalCost);
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
      totalCost += (i.priceNum * i.quantity);
    })

    const newRoom = {
      ...state.selectedRoom,
      cost: totalCost
    }

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
      }
      dispatch({ type: types.changeRoom, payload: newRoom });
      dispatch({ type: types.selectRoom, payload: newRoom });
    };
  }

  function items() {
    console.log('Item state:',itemState);
    // const items = [
    //   "oak plank",
    //   "teak plank",
    //   "mahogany plank"
    // ]
    // axios
    //   .get("/api/items", {params: {items}})
    //   .then(res => {
    //     console.log(res);
    //   })
  }     

  return {
    selectRoom,
    swapRooms,
    changeRoom,
    changeBuild,
    saveRooms,
    findHouse,
    items,
    calculateRoomCost,
    rotateRoom
  };
};

//===================================================================================

function getBuildItems(room, items) {
  const buildItems = [];
  room.builds.forEach(selectedRoomBuild => {
    const roomName = toCamelCase(room.name);
    const hotSpotData = roomData[roomName].hotSpots.find(hS => {
      return hS.name === selectedRoomBuild.hotSpot
    })
    const buildData = hotSpotData.builds.find(b => {
      return b.name === selectedRoomBuild.name
    })
    buildData.materials.forEach(m => {buildItems.push(m)});
  })

  buildItems.map(bI => {
    const itemData = items.find(i => {return i.name === bI.name});
    if (itemData) {
      const [longPrice, priceNum]= shortPriceToLong(itemData.price);
      bI.shortPrice = itemData.price;
      bI.longPrice = longPrice;
      bI.priceNum = priceNum;
    }
    else { 
      bI.shortPrice = '---';
      bI.longPrice = '---';
      bI.priceNum = 0;
    }
    return bI;
  });

  

  return buildItems;
}
