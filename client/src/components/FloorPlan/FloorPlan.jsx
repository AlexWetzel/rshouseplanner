import React, { useState, useEffect, useContext } from 'react'
import { GridPlane, GridSquare } from '../Grid';
import Room from '../Room';
import { StoreContext } from '../../context/StoreContext';
import { types } from '../../context/reducers';

function FloorPlan() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const { rooms } = state;

  const size = 5;
  const gridSquares = []

  for (let x = 1; x <= size; x++) {
    for (let y = 1; y <= size; y++) {
      const coords = `${x},${y}`;
      gridSquares.push(
        <GridSquare
          key={coords}
          coordinates={coords}
          onDragOver={ e => onDragOver(e)}
          onDrop={e => actions.swapRooms(e, coords, rooms)}
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

  function RoomRender(props) {
    const room = rooms.find(room => room.coordinates === props.coords);
    if (room) {
      return (
        <Room
          key={props.coords}
          name={room.name}
          coordinates={props.coords}
          onDragStart={e => onDragStart(e, room.coordinates)}
          onClick={() => actions.selectRoom(room)}
          />
      )
    }
    else return(
      <Room
        key={props.coords}
        coordinates={props.coords}
        onClick={() => dispatch({ type: types.selectRoom, payload: {name: "No room", coordinates: props.coords} })}/>
    ) 
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