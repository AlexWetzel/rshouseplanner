import React from "react";
import style from "./Dropdown.module.css";

export function RoomOption(props) {
  return (
    <div
      className={`${style.option}`}
      // className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
      onClick={props.onClick}
    >
      {props.id ? (
        <img
          src={`https://www.osrsbox.com/osrsbox-db/items-icons/${props.id}.png`}
          alt={props.name}
        />
      ) : null}

      <p>{props.name}</p>
    </div>
  );
}
