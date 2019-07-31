import React, { useContext, useState } from "react";
import style from "./HotSpot.module.css";
import { roomContext } from "../../context/roomContext/RoomContext";
import { types } from "../../context/roomContext/reducers";

export default function HotSpot(props) {
  const { state, dispatch } = useContext(roomContext);
  const { selectedHotSpot, selectedRoom } = state;

  const [hover, setHover] = useState(false);

  const build = selectedRoom.builds.find(b => {
    return b.hotSpot === props.name;
  });

  function checkForSelection() {
    if (selectedHotSpot === props.name) {
      return style.hotSpotSelect;
    }
  }

  function getId() {
    console.log(props.buildData)
    const data = props.buildData.builds.find(b => {
      return b.name === build.name;
    });
    return data.id
  }

  return (
    <span
      className={`
        ${checkForSelection() || hover ? style.hotSpotSelect : null} 

      `}
    >
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
            {build ? (
              <img
                src={`https://www.osrsbox.com/osrsbox-db/items-icons/${
                  getId()
                }.png`}
                alt={p.id}
              />
            ) : (
              <img
                src="https://www.osrsbox.com/osrsbox-db/items-icons/2347.png"
                alt="Empty hotspot"
              />
            )}
            {/* <img src="https://www.osrsbox.com/osrsbox-db/items-icons/2347.png" alt="Empty hotspot"/> */}
            {/* <p>{props.name}</p> */}
            {/* <p>{build ? build.name : "(empty)"}</p> */}
          </span>
        );
      })}
    </span>

    //   <svg className={`${style.hotSpot}`} height='400px' width='400px'>
    //   <polygon className={`${style.poly}`} points={'150,150 250,150 250,250 150,250'}/>
    // </svg>
  );
}
