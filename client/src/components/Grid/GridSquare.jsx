import React from 'react';
import style from './Grid.module.css';

function GridSquare(props) {
  return (
    <span className={`${style.gridSquare}`} {...props}>
      {props.children}
      {/* <span className={`${style.squareHighlight}`} /> */}
    </span>
  )
}

export { GridSquare }