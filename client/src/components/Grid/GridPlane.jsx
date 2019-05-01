import React from 'react'
import style from './GridPlane.module.css';
import { GridSquare } from '../Grid';

function GridPlane() {
  const size = 5;
  const gridSquares = []

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      gridSquares.push(
        <GridSquare />
      )
    }    
  }

  return (
    <div className={`${style.gridPlane}`}>
      {gridSquares}
    </div>
  )
}

export { GridPlane };