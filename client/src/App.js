import React, { useEffect, useContext } from 'react';

import FloorPlan from './components/FloorPlan';
import SidePanel from './components/SidePanel';
import style from './App.module.css';
import PlayerSearch from './components/PlayerSearch/PlayerSearch';
import { userContext } from "./context/userContext/UserContext";
// import { types } from "./context/userContext/reducers";


function App() {
  const { actions } = useContext(userContext);

  useEffect(() => {
    if(typeof(Storage) !== "undefined"){
      actions.useStoredData();
    }
  }, []);
   
  return (
    <div className={`${style.App}`}>
      <PlayerSearch />
      <SidePanel />
      <FloorPlan />
    </div>
  );
}

export default App;
