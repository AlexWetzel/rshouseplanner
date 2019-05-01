import React, { useEffect } from 'react';
import axios from 'axios';

import FloorPlan from './components/FloorPlan';
import './App.css';

function App() {

  useEffect(() => {
    console.log("Hello!");
    axios
      .get("/api/hello")
      .then(res => {
        console.log(res.data.message);
      })
  })

  function getPlayerStats() {
    axios
      .post("/api/player", {name: "uber Guy"})
      .then(res => {
        console.log(res);
      })
  }

  return (
    <div className="App">
      <button onClick={() => getPlayerStats()}>Get Stats</button>
      <FloorPlan />
    </div>
  );
}

export default App;
