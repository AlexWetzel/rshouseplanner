import React from 'react';
import style from "./Layout.module.css";
// import HotSpot from '../HotSpot/HotSpot';

// import * as roomMaps from '../../data/roomMaps';

export default function Layout(props) {
  // const roomName = props.name.toLowerCase();
  // const hotSpots = roomMaps[roomName];

  return (
    <div className={`${style.layout}`}>
      {props.name}
      {props.children}
      {/* {hotSpots.map(hs => {
        return <HotSpot
          key={hs.name}
          name={hs.name} 
          position={hs.position}
          builds={props.builds}
          />
      })} */}
    </div>
  )
}