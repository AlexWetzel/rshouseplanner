import React from "react";
import style from "./Layout.module.css";
import Maps from "../Maps";
import HotSpot from "../HotSpot/HotSpot";

import * as roomMaps from "../../data/roomMaps";

import { toCamelCase } from "../../helpers/parsers";

export default function Layout(props) {
  const roomName = toCamelCase(props.roomName);
  const roomMap = roomMaps[roomName];

  function formatMaps(maps) {
    const orientation = props.orientation;
    const newMap = maps.map(m => {
      let north = 0,
        south = 0,
        east = 0,
        west = 0;
      switch (orientation) {
        case "south":
          [south, west, north, east] = m;
          break;

        case "east":
          [east, south, west, north] = m;
          break;

        case "west":
          [west, north, east, south] = m;
          break;

        default:
          [north, east, south, west] = m;
          break;
      }
      return [north, east, south, west];
    });

    return newMap;
  }
  function HotSpotMaps(props) {
    if (props.isSelectedForEdit) {
      return <HotSpot {...props} />;
    } else {
      return <Maps {...props} />;
    }
  }

  return (
    <div className={`${style.layout} ${style[props.roomType]}`}>
      {roomMap.hotSpots.map(hs => {
        return (
          <HotSpotMaps
            key={hs.name}
            name={hs.name}
            mapType={"hotSpot"}
            position={formatMaps(hs.position)}
            isSelectedForEdit={props.isSelectedForEdit}
          />
        );
      })}
      <Maps
        name={"doors"}
        mapType={"door"}
        position={formatMaps(roomMap.doors)}
      />
      <Maps
        name={"walls"}
        mapType={"walls"}
        position={formatMaps(roomMap.walls)}
      />
    </div>
  );
}
