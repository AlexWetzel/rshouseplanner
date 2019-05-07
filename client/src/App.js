import React, { useEffect } from 'react';
import axios from 'axios';

import FloorPlan from './components/FloorPlan';
import SidePanel from './components/SidePanel';
import style from './App.module.css';

function App() {

  // useEffect(() => {
  //   axios
  //     .get("/api/hello")
  //     .then(res => {
  //       console.log(res.data.message);
  //     })
  // })

  function getPlayerStats() {
    axios
      .post("/api/player", {name: "uber Guy"})
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div className={`${style.App}`}>
      {/* <button onClick={() => getPlayerStats()}>Get Stats</button> */}
      <SidePanel />
      <FloorPlan />
    </div>
  );
}

export default App;
