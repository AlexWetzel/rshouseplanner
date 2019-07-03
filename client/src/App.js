import React, { useEffect, useContext } from 'react';

import FloorPlan from './components/FloorPlan';
import SidePanel from './components/SidePanel';
import style from './App.module.css';
import PlayerSearch from './components/PlayerSearch/PlayerSearch';
import { userContext } from "./context/userContext/UserContext";
import { roomContext } from "./context/roomContext/RoomContext";
import { itemContext } from "./context/itemContext/ItemContext";
import HouseValue from './components/HouseValue/HouseValue';
// import { types } from "./context/userContext/reducers";


function App() {
  const { actions: userActions } = useContext(userContext);
  const { actions: roomActions } = useContext(roomContext);
  const { actions: itemActions } = useContext(itemContext);

  useEffect(() => {
    if(typeof(Storage) !== "undefined"){
      // userActions.useStoredData();
      const id = localStorage.getItem("id")
      const name = localStorage.getItem("name");
      
      console.log(id)
      if (id !== "undefined") {
        roomActions.findHouse(id);
      }

      if (name) {
        userActions.searchPlayer(name);
      }
      
    }
    // itemActions.compileItemList();
  }, []);

  // useEffect(() => {
  //   itemActions.compileItemList();
  // }, [])

  return (
    <div className={`${style.App}`}>
      <button onClick={() => itemActions.compileItemList()}>item test</button>
      <HouseValue />
      <PlayerSearch />
      <SidePanel />
      <FloorPlan />
    </div>
  );
}

export default App;
