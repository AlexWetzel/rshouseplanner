import React from 'react'
import style from './Room.module.css';

function Room(props) {
  return (
    <div
      className={`${style.room}`}
      draggable
      {...props}
      >
      {props.children}
    </div>
  )
}

export default Room;