import React from "react";
import style from "./Dropdown.module.css";

export function HotspotOption(props) {
  return (
    <div
      className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
      onClick={props.onClick}
    >
      {props.id ? (
        <>
          <span>Level: {props.level}</span>
          <img
            src={`https://www.osrsbox.com/osrsbox-db/items-icons/${
              props.id
            }.png`}
            alt={props.name}
          />

          <span>{props.name}</span>
          {props.materials.map(m => {
            return (
              <span>
                <img
                  src={`https://www.osrsbox.com/osrsbox-db/items-icons/${
                    m.id
                  }.png`}
                  alt={m.name}
                />
                x{m.quantity}
              </span>
            );
          })}
        </>
      ) : (
        <span>{props.name}</span>
      )}
    </div>
  );
}

///////////// ENKI
