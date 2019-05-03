import React from 'react';
import style from "./Garden.module.css";
import HotSpot from '../HotSpot/HotSpot';

export default function Garden() {
  const garden = {
    
  }
  return (
    <div className={`${style.garden}`}>
      <HotSpot />
    </div>
  )
}
