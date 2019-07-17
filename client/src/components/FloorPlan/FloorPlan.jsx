import React, { useContext } from "react";
import { GridPlane, GridSquare } from "../Grid";
import Room from "../Room";
import { roomContext } from "../../context/roomContext/RoomContext";
import { itemContext } from "../../context/itemContext/ItemContext";
import { types } from "../../context/roomContext/reducers";
import Layout from "../Layout";
import Doors from "../Doors";

import * as roomMaps from "../../data/roomMaps";

import { toCamelCase } from "../../helpers/parsers";
import HouseValue from "../HouseValue/HouseValue";
import PlayerSearch from "../PlayerSearch/PlayerSearch";

function FloorPlan() {
  const { state, dispatch, actions } = useContext(roomContext);
  const { rooms } = state;

  const { actions: itemActions } = useContext(itemContext);

  const size = 5;
  const gridSquares = [];

  for (let x = 1; x <= size; x++) {
    for (let y = 1; y <= size; y++) {
      const coords = `${x},${y}`;
      gridSquares.push(
        <GridSquare
          key={coords}
          coordinates={coords}
          onDragOver={e => onDragOver(e)}
          onDrop={e => actions.swapRooms(e, coords, rooms)}
        >
          <RoomRender coords={coords} />
        </GridSquare>
      );
    }
  }

  function onDragOver(e) {
    e.preventDefault();
  }

  function onDragStart(e, coords) {
    console.log("dragstart:", coords);
    e.dataTransfer.setData("coordinates", coords);
  }

  function RoomRender(props) {
    const room = rooms.find(room => room.coordinates === props.coords);

    if (room) {
      const roomName = toCamelCase(room.name);
      const { hotSpots, doors } = roomMaps[roomName];

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
              return (
                <SmallHotSpot
                  key={hs.name}
                  name={hs.name}
                  position={hs.position}
                  builds={room.builds}
                />
              );
            })}
            <Doors position={doors} />
          </Layout>
        </Room>
      );
    } else
      return (
        <Room
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

  function SmallHotSpot(props) {
    const build = props.builds.find(b => {
      return b.hotSpot === props.name;
    });

    return (
      <span>
        {props.position.map((p, index) => {
          const [t, r, b, l] = p;
          const bg = build ? "rgb(102, 43, 43)" : "rgb(197, 192, 192)";
          const position = {
            top: t + "%",
            right: r + "%",
            bottom: b + "%",
            left: l + "%",

            position: "absolute",
            margin: "2px",
            border: "1px dashed white",
            width: "auto",
            height: "auto",
            backgroundColor: bg
          };

          return <span key={props.name + index} style={position} />;
        })}
      </span>
    );
  }

  return (
    <div>
      <button onClick={() => itemActions.compileItemList()}>item test</button>
      <HouseValue />
      <PlayerSearch />
      <GridPlane>{gridSquares}</GridPlane>
    </div>
  );
}

export default FloorPlan;
