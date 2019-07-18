import React from "react";
import style from './Maps.module.css';

function Maps(props) {

  return (
    <>
      {props.position.map((p, index) => {
        const [t, r, b, l] = p;
        const position = {
          top: t + "%",
          right: r + "%",
          bottom: b + "%",
          left: l + "%"
        };
        return (
          <span
            key={props.name + index}
            className={`${style[props.mapType]} ${style.map}`}
            style={position}
          />
        );
      })}
    </>
  );
}

export default Maps;
