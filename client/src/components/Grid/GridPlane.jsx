import React from 'react'
import style from './Grid.module.css';

function GridPlane(props) {
  return (
    <div className={`${style.gridPlane}`}>
      {props.children}
    </div>
  )
}

export { GridPlane };