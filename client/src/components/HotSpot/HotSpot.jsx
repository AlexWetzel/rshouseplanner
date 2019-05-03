import React from 'react';
import style from './HotSpot.module.css';

export default function HotSpot() {
  const position = {
    left: '25%',
    right: '25%',
    top: '25%',
    bottom: '25%',
  }
  return (
    <span className={`${style.hotSpot}`} style={position}>
      {/* {props.children} */}
    </span>
  )
}
