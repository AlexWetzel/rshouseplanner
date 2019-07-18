import React from "react";
import style from "./Room.module.css";
// import Layout from "../Layout";

function Room(props) {
  return (
    <div className={`${style.room}`} draggable {...props}>
      {props.children}
      {/* <Layout roomName={props.name} /> */}
    </div>
  );
}

export default Room;
