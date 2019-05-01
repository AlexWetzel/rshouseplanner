import React from 'react'
import style from './Room.module.css';

function Room(props) {
  return (
    <div
      className={`${style.room}`}
      draggable
      onDragStart={props.onDragStart}
      >
      {props.name}
    </div>
  )
}

export default Room;