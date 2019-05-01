import React, { useState, useEffect } from 'react'
import { GridPlane, GridSquare } from '../Grid';
import Room from '../Room';

function FloorPlan() {
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
          onDragOver={ e => onDragOver(e)}
          onDrop={e => onDrop(e, coords)}
        >
          <RoomRender coords={coords} />
        </GridSquare>
      )
    }    
  }


  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragStart(e, coords) {
    console.log("dragstart:", coords);
    e.dataTransfer.setData("coordinates", coords)
  }

  function onDrop(e, newCoords) {
    let oldCoords = e.dataTransfer.getData("coordinates");
    console.log(oldCoords, newCoords)
    let newRooms = rooms.map(room => {
      if (room.coordinates === oldCoords) {
        room.coordinates = newCoords;        
      }
      else if (room.coordinates === newCoords) {
        room.coordinates = oldCoords;
      }
      return room
    });

    setRooms(newRooms);
  }

  function RoomRender(props) {
    const room =  rooms.find(room => room.coordinates === props.coords);
    if (room) {
      return <Room onDragStart={e => onDragStart(e, room.coordinates)} name={room.name} />;
    }
    else return null;
  }

  return (
    <div>
      <GridPlane>
        {gridSquares}
      </GridPlane>
    </div>
  )
}

export default FloorPlan;