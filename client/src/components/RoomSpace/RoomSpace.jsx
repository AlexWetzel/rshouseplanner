import React from "react";
import style from "./Room.module.css";
// import Layout from "../Layout";

function Room(props) {
  return (
    <div className={(props.children) ? style.occupiedSpace : style.emptySpace} draggable {...props}>
      {props.children}
    </div>
  );
}

export default Room;
