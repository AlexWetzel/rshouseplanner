import React, { useState, useContext } from "react";
import style from "./SidePanel.module.css";
import RoomEdit from "../RoomEdit";
import RoomCost from "../RoomCost";
import { roomContext } from "../../context/roomContext/RoomContext";

export default function SidePanel() {
  const { state } = useContext(roomContext);

  const { selectedRoom } = state;

  console.log(selectedRoom);

  // useEffect(() => {
  //   console.log("test");
  // }, [selectedRoom.coordinates])

  return (
    <div className={`${style.sidePanel}`}>
      {selectedRoom ? (
        <RoomSelected
          roomName={selectedRoom.name}
          coordinates={selectedRoom.coordinates}
        />
      ) : (
        <NoRoomSelected />
      )}
      {/* <TabSwitch openTab={openTab} selectedRoomName={selectedRoom.name} /> */}
    </div>
  );
}

function RoomSelected(props) {
  const [openTab, setOpenTab] = useState("roomEdit");
  return (
    <>
      <div onClick={() => setOpenTab("roomEdit")}>Room Edit</div>
      <div onClick={() => setOpenTab("cost")}>Cost</div>
      <TabSwitch openTab={openTab} roomName={props.roomName} />
    </>
  );
}

function TabSwitch(props) {
  console.log(props.roomName);
  switch (props.openTab) {
    case "roomEdit":
      return <RoomEdit />;
    case "cost":
      if (props.roomName === "---") {
        return <RoomEdit />;
      }
      else return <RoomCost />;
    default:
      return <RoomEdit />;
  }
}

function NoRoomSelected() {
  return (
    // <>
    <h1>No Rooms Selected</h1>
    // </>
  );
}
