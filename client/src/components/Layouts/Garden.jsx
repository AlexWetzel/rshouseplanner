import React from 'react';
import style from "./Layout.module.css";
import HotSpot from '../HotSpot/HotSpot';

export function Garden() {
  const hotSpots = [

    // {
    //   points: '37.5,37.5 62.5,37.5 62.5,62.5 62.5,37.5'
    // }
    {
      name: 'Centrepiece',
      position: [[37.5, 37.5, 37.5, 37.5]]
    },
    {
      name: 'Tree 1',
      position: [[75, 75, 0, 0]]
    },
    {
      name: 'Tree 2',
      position: [[62.5, 12.5, 12.5, 62.5]]
    },
    {
      name: 'Small Plant 1',
      position: [[12.5, 37.5, 75, 50]]
    },
    {
      name: 'Small Plant 2',
      position: [[62.5, 50, 25, 37.5]]
    },
    {
      name: 'Big Plant 1',
      position: [[0, 75, 75, 0]]
    },
    {
      name: 'Big Plant 2',
      position: [[0, 0, 75, 75]]
    },
    {
      name: 'Tip Jar',
      position: [[62.5, 75, 25, 12.5]]
    }

  ]
  return (
    <div className={`${style.layout}`}>
      {hotSpots.map( hS => {
        return <HotSpot name={hS.name} position={hS.position} />
      })}
    </div>
  )
}