import React, { useContext, useState } from "react";
import style from "./HotSpot.module.css";
import { StoreContext } from "../../context/StoreContext";
import { types } from "../../context/reducers";

export default function HotSpot(props) {
  const { state, dispatch } = useContext(StoreContext);
  // const { selectedHotSpot, selectedRoom } = state;
  const { selectedHotSpot } = state;

  const [hover, setHover] = useState(false);

  const build = props.builds.find(b => {
    return b.hotSpot === props.name;
  });

  function checkForSelection() {
    if (selectedHotSpot === props.name) {
      return style.hotSpotSelect;
    }
  }

  return (
    <span
      className={`
        ${checkForSelection() || hover ? style.hotSpotSelect : null} 

      `}
    >
      {props.position.map((p, index) => {
        let t = 0, r = 0, b = 0, l = 0;
        switch (props.face) {
          case 's':
            [b, l, t, r,] = p;
            break;
          
          
          default:
            [t, r, b, l] = p;
            break;
        }
        

        const position = {
          top: t + "%",
          right: r + "%",
          bottom: b + "%",
          left: l + "%"
        };
        return (
          <span
            key={props.name + index}
            className={`
              ${style.hotSpot} 
              ${build ? style.build : null}
            `}
            style={position}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            onClick={() =>
              dispatch({ type: types.selectHotSpot, payload: props.name })
            }
          >
            <p>{props.name}</p>
            <p>{build ? build.name : "(empty)"}</p>
          </span>
        );
      })}
    </span>

    //   <svg className={`${style.hotSpot}`} height='400px' width='400px'>
    //   <polygon className={`${style.poly}`} points={'150,150 250,150 250,250 150,250'}/>
    // </svg>
  );
}
