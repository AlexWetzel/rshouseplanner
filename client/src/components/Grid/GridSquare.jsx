import React from 'react';
import style from './GridSquare.module.css';

function GridSquare(props) {

  
  return (
    <span className={`${style.gridSquare}`}>
      Square
    </span>
  )
}

export { GridSquare }