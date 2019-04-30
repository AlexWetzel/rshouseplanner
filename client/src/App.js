import React, { useEffect } from 'react';
import axios from 'axios';

import FloorPlan from './components/FloorPlan';
import './App.css';

function App() {
  // const [tasks, setTasks] = useState([
  //   {
  //     name: "do something",
  //     category: "wip"
  //   },
  //   {
  //     name: "do something else",
  //     category: "wip"
  //   }
  // ])

  // const taskList = { wip: [], complete: [] }

  // tasks.forEach (task => {
  //   taskList[task.category].push(
  //     <div
  //       key={task.name}
  //       onDragStart={ e => onDragStart(e, task.name)}
  //       draggable
  //       className="draggable"
  //     >
  //       {task.name}
  //     </div>
  //   )
  // })

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

  // function onDragOver(e) {
  //   e.preventDefault();
  // }

  // function onDragStart(e, name) {
  //   console.log("dragstart:", name);

  // }

  return (
    <div className="App">
      <button onClick={() => getPlayerStats()}>Get Stats</button>
      <FloorPlan />
    </div>
  );
}

export default App;
