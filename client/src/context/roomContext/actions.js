import { types } from "./reducers";
import axios from "axios";

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

  function changeBuild(name, hsName, selectRoom) {
    const build = name;

    const newBuild = {
      name: build,
      hotSpot: hsName
    };
    const buildIndex = selectRoom.builds.findIndex(b => b.hotSpot === hsName);
    const newRoom = { ...selectRoom };

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
    calculateRoomCost
  };
};
