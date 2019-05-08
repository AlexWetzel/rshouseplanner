import React from 'react';
import style from "./Layout.module.css";
import HotSpot from '../HotSpot/HotSpot';

export default function Layout(props) {
  
  return (
    <div className={`${style.layout}`}>
      {props.room.name}
      {props.hotSpots.map(hs => {
        return <HotSpot key={hs.name} name={hs.name} position={hs.position} />
      })}
    </div>
  )
}