import React from 'react';
import style from "./Layout.module.css";
import HotSpot from '../HotSpot/HotSpot';

export default function Layout(props, hsName) {
  // function getBuild() {
  //   console.log('build props:', props.builds)
  //   const build = props.builds.find(b => {return b.hotSpot === hsName});
  //   console.log('build',build);
  //   return (build) ? build.name : '(Empty)';
  // }
  return (
    <div className={`${style.layout}`}>
      {props.room.name}
      {props.hotSpots.map(hs => {
        return <HotSpot
          key={hs.name}
          name={hs.name} 
          position={hs.position}
          // build={getBuild(hs.Name)} 
          />
      })}
    </div>
  )
}