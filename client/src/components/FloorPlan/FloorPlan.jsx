import React, { useState } from 'react'
import { GridPlane } from '../Grid'

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
      <GridPlane />
    </div>
  )
}

export default FloorPlan;