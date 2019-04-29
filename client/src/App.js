import React, { useState, useEffect } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([
    {
      name: "do something",
      category: "wip"
    },
    {
      name: "do something else",
      category: "wip"
    }
  ])

  useEffect(() => {
    console.log("Hello!");
    axios
      .get("/api/hello")
      .then(res => {
        console.log(res.data.message);
      })
  })

  function getPlayerStats() {
    // const name = "Uber Guy"
    axios
      .post("/api/player", {name: "uber Guy"})
      .then(res => {
        console.log(res);
      })
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  return (
    // tasks.forEach (task => {

    // })

    <div className="App">
      <button onClick={() => getPlayerStats()}>Get Stats</button>
      <div className="container-drag">
        <div id="One" className="wip">
          <h3>Wip</h3>
        </div>
        <div id="two" className="droppable" onDragOver={ e => onDragOver(e)}>
          <h3>Complete</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
