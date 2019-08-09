import React, { useContext } from "react";
import { GridPlane, GridSquare } from "../Grid";
import RoomSpace from "../RoomSpace";
import { roomContext } from "../../context/roomContext/RoomContext";
import { itemContext } from "../../context/itemContext/ItemContext";
import { types } from "../../context/roomContext/reducers";
import Layout from "../Layout";

import * as roomData from "../../data/roomData";

import { toCamelCase } from "../../helpers/parsers";

import HouseValue from "../HouseValue/HouseValue";
import PlayerSearch from "../PlayerSearch/PlayerSearch";

function FloorPlan() {
  const { state, dispatch, actions } = useContext(roomContext);
  const { rooms } = state;

  const { actions: itemActions } = useContext(itemContext);

  const size = 5;

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragStart(e, coords) {
    e.dataTransfer.setData("coordinates", coords);
  }

  function RoomRender(props) {
    const room = rooms.find(room => room.coordinates === props.coords);

    if (room) {
      const roomName = toCamelCase(room.name);
      const roomType = roomData[roomName].type;
      return (
        <RoomSpace
          key={props.coords}
          name={room.name}
          coordinates={props.coords}
          builds={room.builds}
          onDragStart={e => onDragStart(e, room.coordinates)}
          onClick={() => actions.selectRoom(room)}
        >
          <Layout
            roomName={room.name}
            isSelectedForEdit={false}
            orientation={room.orientation}
            roomType={roomType}
          />
        </RoomSpace>
      );
    } else
      return (
        <RoomSpace
          key={props.coords}
          coordinates={props.coords}
          onClick={() =>
            dispatch({
              type: types.selectRoom,
              payload: { name: "---", coordinates: props.coords }
            })
          }
        />
      );
  }

  function Floor(props) {
    const gridSquares = [];

    for (let x = 1; x <= size; x++) {
      for (let y = 1; y <= size; y++) {
        const coords = `${x},${y},${props.floor}`;
        gridSquares.push(
          <GridSquare
            key={coords}
            coordinates={coords}
            onDragOver={e => onDragOver(e)}
            onDrop={e => actions.swapRooms(e, coords)}
          >
            <RoomRender coords={coords} />
          </GridSquare>
        );
      }
    }
    return <GridPlane>{gridSquares}</GridPlane>;
  }

  function Floors() {
    const { state, dispatch } = useContext(roomContext);
    const { selectedFloor } = state;

    function floorHeader() {
      switch (selectedFloor) {
        case 0:
          return "Ground floor";
        case 1:
          return "Upstairs";
        case -1:
          return "Basement";
        default:
          return "Floor error";
      }
    }

    return (
      <>
        <h1>{floorHeader()}</h1>
        <Floor floor={selectedFloor} />
        <button
          onClick={() => dispatch({ type: types.selectFloor, payload: 1 })}
        >
          Upstairs
        </button>
        <button
          onClick={() => dispatch({ type: types.selectFloor, payload: 0 })}
        >
          Ground floor
        </button>
        <button
          onClick={() => dispatch({ type: types.selectFloor, payload: -1 })}
        >
          Basement
        </button>
      </>
    );
  }

  return (
    <div>
      <button onClick={() => itemActions.updateExchangePrices()}>
        item test
      </button>
      <button onClick={() => itemActions.postItems()}>create items</button>
      <HouseValue />
      <PlayerSearch />
      <Floors />
    </div>
  );
}

export default FloorPlan;
