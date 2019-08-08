import React from "react";
import style from "./Dropdown.module.css";

export function RoomOption(props) {
  function RoomOptionWrapper(props) {
    return (
      <div
        className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
  }

  function RoomOptionContents() {
    return (
      <>
        <span className={style.roomLevel}>Level: {props.level}</span>
        <img
          className={style.roomIcon}
          src={`https://www.osrsbox.com/osrsbox-db/items-icons/${props.id}.png`}
          alt={props.name}
        />
        <span className={style.roomName}>{props.name}</span>
        <span className={style.roomPrice}>{props.price}gp</span>
      </>
    );
  }

  return (
    <RoomOptionWrapper {...props}>
      {props.id ? <RoomOptionContents /> : <span>No room</span>}
    </RoomOptionWrapper>
  );
}
