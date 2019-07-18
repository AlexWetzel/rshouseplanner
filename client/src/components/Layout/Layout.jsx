import React from "react";
import style from "./Layout.module.css";
import Maps from "../Maps";
// import HotSpot from '../HotSpot/HotSpot';

import * as roomMaps from "../../data/roomMaps";

import { toCamelCase } from "../../helpers/parsers";

export default function Layout(props) {
  const roomName = toCamelCase(props.roomName);
  const roomMap = roomMaps[roomName];
  // const {hotSpots, doors} = roomMaps[roomName];
  // const roomName = props.name.toLowerCase();
  // const hotSpots = roomMaps[roomName];

  return (
    <div className={`${style.layout}`}>
      {roomMap.hotSpots.map(hs => {
        return (
          <Maps
            key={hs.name}
            name={hs.name}
            mapType={"hotSpot"}
            position={hs.position}
            // builds={room.builds}
          />
        );
      })}
      <Maps name={"doors"} mapType={"door"} position={roomMap.doors} />
      {/* <Maps /> */}
      {/* {props.name} */}
      {/* {props.children} */}

      {/* {hotSpots.map(hs => {
        return <HotSpot
          key={hs.name}
          name={hs.name} 
          position={hs.position}
          builds={props.builds}
          />
      })} */}
    </div>
  );
}
