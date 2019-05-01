import React, { useState } from 'react'
import { GridPlane, GridSquare } from '../Grid';
import Room from '../Room';

function FloorPlan() {
  const [tasks, setTasks] = useState([
    {
      name: "one",
      category: "wip"
    },
    {
      name: "two",
      category: "complete"
    }
  ])

  const taskList = { wip: [], complete: [] }

  tasks.forEach(task => {
    taskList[task.category].push(
      <div
        key={task.name}
        onDragStart={ e => onDragStart(e, task.category)}
        draggable
        className="draggable"
      >
        {task.name}
      </div>
    )
  });

  const [rooms, setRooms] = useState([
    {
      name: "bedroom",
      coordinates: "1,2"
    },
    {
      name: "garden",
      coordinates: "2,4"
    }
  ])

  const size = 5;
  const gridSquares = []

  for (let x = 1; x <= size; x++) {
    for (let y = 1; y <= size; y++) {
      const coords = `${x},${y}`;
      gridSquares.push(
        <GridSquare
          key={`${x},${y}`}
          coordinates={`${x},${y}`}
        >
          <RoomRender coords={coords} />
        </GridSquare>
      )
    }    
  }


  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragStart(e, cat) {
    console.log("dragstart:", cat);
    // e.dataTransfer.setData("name", name);
    e.dataTransfer.setData("category", cat)
  }

  function onDrop(e, newCat) {
    let oldCat = e.dataTransfer.getData("category");
    console.log(oldCat, newCat)
    let taskList = tasks.map(task => {
      if (task.category === oldCat) {
        // let catExchange = task.category;
        task.category = newCat;
        
      }
      else if (task.category === newCat) {
        task.category = oldCat;
      }
      console.log(task)
      return task
    });

    setTasks(taskList);
  }

  function RoomRender(props) {
    if ( rooms.find(room => room.coordinates === props.coords) ) {
      return <Room />;
    }
    else return null;
  }

  return (
    <div className="container-drag">
      <div
        id="One"
        className="wip"
        onDragOver={ e => onDragOver(e)}
        onDrop={e => onDrop(e, "wip")}
        >
        <h3>Wip</h3>
        {taskList.wip}
      </div>
      <div 
        id="two" 
        className="droppable"
        onDragOver={ e => onDragOver(e)}
        onDrop={e => onDrop(e, "complete")}
        >
        <h3>Complete</h3>
        {taskList.complete}
      </div>
      <GridPlane>
        {gridSquares}
      </GridPlane>
    </div>
  )
}

export default FloorPlan;