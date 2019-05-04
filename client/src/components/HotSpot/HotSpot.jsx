import React from 'react';
import style from './HotSpot.module.css';

export default function HotSpot(props) {

  return (
    <span>
      {props.position.map(p => {
        const [t,r,b,l] = p;
  
        const position = {
          top: t+'%',
          right: r+'%',
          bottom: b+'%',
          left: l+'%',
        }
        return (
        <span 
          className={`${style.hotSpot}`}
          style={position}
        >
          <p>{props.name}</p>
        </span>
        )
      })}
    </span>


  //   <svg className={`${style.hotSpot}`} height='400px' width='400px'>
  //   <polygon className={`${style.poly}`} points={'150,150 250,150 250,250 150,250'}/>
  // </svg>
  )
}
