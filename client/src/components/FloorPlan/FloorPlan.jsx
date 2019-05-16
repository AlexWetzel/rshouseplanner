import React, { useState, useEffect, useContext } from 'react'
import { GridPlane, GridSquare } from '../Grid';
import Room from '../Room';
import { StoreContext } from '../../context/StoreContext';
import { types } from '../../context/reducers';
import Layout from '../Layout';

import * as roomMaps from '../../data/roomMaps';

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
      const roomName = room.name.toLowerCase();
      const hotSpots = roomMaps[roomName];
      return (
        <Room
          key={props.coords}
          name={room.name}
          coordinates={props.coords}
          builds={room.builds}
          onDragStart={e => onDragStart(e, room.coordinates)}
          onClick={() => actions.selectRoom(room)}
        >
          <Layout>
            {hotSpots.map(hs => {
              return(
                <SmallHotSpot
                  key={hs.name}
                  name={hs.name} 
                  position={hs.position}
                  // builds={builds}
                />
              )
            })}
          </Layout>
        </Room>
      )
    }
    else return(
      <Room
        key={props.coords}
        coordinates={props.coords}
        onClick={() => dispatch({ type: types.selectRoom, payload: {name: "No room", coordinates: props.coords} })}/>
    ) 
  }

  function SmallHotSpot(props) {
    return(
      <span>
        {props.position.map((p, index) => {
          const [t, r, b, l] = p;

          const position = {
            top: t + "%",
            right: r + "%",
            bottom: b + "%",
            left: l + "%",

            position: 'absolute',
            margin: '2px',
            border: '1px dashed white', 
            width: 'auto',
            height: 'auto',
            backgroundColor: "rgb(197, 192, 192)"

          };

          return (
            <span
              key={props.name + index}
              // className={`${style.hotSpot}`}
              style={position}
              // onMouseEnter={() => setHover(true)}
              // onMouseLeave={() => setHover(false)}
              // onClick={() =>
              //   dispatch({ type: types.selectHotSpot, payload: props.name })
              // }
            >
              {/* <p>{props.name}</p>
              <p>{(build) ? build.name : '(empty)'}</p> */}
            </span>
          );
        })}
      </span>
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