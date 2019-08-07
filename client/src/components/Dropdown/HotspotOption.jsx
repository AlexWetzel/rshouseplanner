import React from "react";
import style from "./Dropdown.module.css";

export function HotspotOption(props) {
  console.log(props.materials);
  return (
    <div
      className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
      onClick={props.onClick}
    >
      <span>Level: {props.level}</span>
      {props.id ? (
        <img
          src={`https://www.osrsbox.com/osrsbox-db/items-icons/${props.id}.png`}
          alt={props.name}
        />
      ) : null}

      <span>{props.name}</span>
      {props.materials.map(m => {
        return <span>
          <img
            src={`https://www.osrsbox.com/osrsbox-db/items-icons/${
              m.id
            }.png`}
            alt={m.name}
          />
        </span>;
      })}

    </div>
  );
}

///////////// ENKI
