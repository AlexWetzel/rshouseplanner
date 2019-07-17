import React from "react";
import style from "./Door.module.css";

export default function Doors(props) {
  return (
    <>
      {props.position.map(p => {
        const [t, r, b, l] = p;
        const position = {
          top: t + "%",
          right: r + "%",
          bottom: b + "%",
          left: l + "%"
        };
        return <span className={style.door} style={position} />;
      })}
    </>
  );
}
