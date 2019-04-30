import React, { useState } from 'react'

function FloorPlan() {
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

  const taskList = { wip: [], complete: [] }

  tasks.forEach (task => {
    taskList[task.category].push(
      <div
        key={task.name}
        onDragStart={ e => onDragStart(e, task.name)}
        draggable
        className="draggable"
      >
        {task.name}
      </div>
    )
  })
  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragStart(e, name) {
    console.log("dragstart:", name);
    
  }
  return (
    <div className="container-drag">
        <div id="One" className="wip">
          <h3>Wip</h3>
          {taskList.wip}
        </div>
        <div id="two" className="droppable" onDragOver={ e => onDragOver(e)}>
          <h3>Complete</h3>
          {taskList.complete}
        </div>
      </div>
  )
}

export default FloorPlan;