import React from "react";
import style from "../Dropdown.module.css";

export default function HotspotOption(props) {
  function HotspotOptionWrapper(props) {
    return (
      <div
        className={`${style.option} ${props.canBuild ? "" : style.disabled}`}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
  }

  function HotspotOptionContents() {
    return (
      <>
        <span>Level: {props.level}</span>
        <img
          src={`https://www.osrsbox.com/osrsbox-db/items-icons/${props.id}.png`}
          alt={props.name}
        />
        <span>{props.name}</span>
        {props.materials.map((m, index) => {
          return (
            <span key={`${props.name} item ${index}`}>
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
    );
  }

  return (
    <HotspotOptionWrapper {...props}>
      {props.id ? <HotspotOptionContents /> : <span>{props.name}</span>}
    </HotspotOptionWrapper>
  );
}

///////////// ENKI
