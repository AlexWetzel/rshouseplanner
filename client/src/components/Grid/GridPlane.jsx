import React from 'react'
import style from './GridPlane.module.css';
// import { GridSquare } from '../Grid';
// import Room from '../Room';

function GridPlane(props) {

  return (
    <div className={`${style.gridPlane}`}>
      {/* {gridSquares} */}
      {props.children}
    </div>
  )
}

export { GridPlane };