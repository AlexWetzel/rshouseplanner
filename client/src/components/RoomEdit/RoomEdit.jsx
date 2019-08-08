import React, { useContext } from "react";
import style from "./RoomLayout.module.css";
import Layout from "../Layout";
import HotspotDropdown from "../Dropdown/HotspotDropdown";
import RoomDropdown from "../Dropdown/RoomDropdown";
import { roomContext } from "../../context/roomContext/RoomContext";

import * as roomData from "../../data/roomData";

import { toCamelCase } from "../../helpers/parsers";

export default function RoomLayout() {
  const { state, actions } = useContext(roomContext);
  const { selectedRoom, selectedHotSpot } = state;


  function RoomNotSelected() {
    return <RoomDropdown />;
  }

  function RoomSelected() {
    const roomName = toCamelCase(selectedRoom.name);
    const selectedRoomData = roomData[roomName];
    const hotSpot = selectedRoomData.hotSpots.find(hs => {
      return hs.name === selectedHotSpot;
    });

    return (
      <>
        <div className={`${style.roomEditor}`}>
          <Layout
            roomName={selectedRoom.name}
            isSelectedForEdit={true}
            orientation={selectedRoom.orientation}
            roomType={selectedRoomData.type}
          />
        </div>
        <RotateButtons />
        <RoomDropdown />
        <h3>{"Hotspots"}</h3>
        {hotSpot ? <HotspotDropdown /> : null}
      </>
    );
  }

  function RotateButtons() {
    const { actions } = useContext(roomContext);
    return (
      <>
        <button onClick={() => actions.rotateRoom("ROTATE_COUNTERCLOCKWISE")}>
          Rotate counterclockwise
        </button>
        <button onClick={() => actions.rotateRoom("ROTATE_CLOCKWISE")}>
          Rotate clockwise
        </button>
      </>
    );
  }

  return (
    <div>
      <button onClick={() => actions.saveRooms()}>Save Rooms</button>
      <button onClick={() => localStorage.removeItem("id")}>Clear Id</button>
      <button onClick={() => localStorage.removeItem("name")}>
        Clear Name
      </button>
      {selectedRoom.name === "---" ? <RoomNotSelected /> : <RoomSelected />}
    </div>
  );
}
