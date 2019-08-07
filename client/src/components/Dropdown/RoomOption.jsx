import React from "react";
import style from "./Dropdown.module.css";

export function RoomOption(props) {
  return (
    <div
      className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
      onClick={props.onClick}
    >
      <span className={style.roomLevel}>Level: {props.level}</span>
      {props.id ? (
        <img
          className={style.roomIcon}
          src={`https://www.osrsbox.com/osrsbox-db/items-icons/${props.id}.png`}
          alt={props.name}
        />
      ) : null}
      <span className={style.roomName}>{props.name}</span>
      <span className={style.roomPrice}>{props.price}gp</span>
    </div>
  );
}
