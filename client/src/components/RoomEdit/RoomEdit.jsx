import React, { useContext } from "react";
import style from "./RoomLayout.module.css";
import Layout from "../Layout";
import Dropdown from "../Dropdown/Dropdown";
import { roomContext } from "../../context/roomContext/RoomContext";

import * as roomData from "../../data/roomData";

import { toCamelCase } from "../../helpers/parsers";

export default function RoomLayout() {
  const { state, actions } = useContext(roomContext);
  const { selectedRoom, rooms, selectedHotSpot } = state;

  const roomNames = Object.keys(roomData);
  function RoomSelected() {
    if (selectedRoom.name === "---") {
      return (
        <Dropdown
          name={"Select a room"}
          options={roomNames.map(rn => {
            return roomData[rn];
          })}
          selectedOption={selectedRoom.name}
          onSelect={name =>
            actions.changeRoom(name, roomData, selectedRoom, rooms)
          }
        />
      );
    } else {
      const roomName = toCamelCase(selectedRoom.name);
      console.log(roomName);
      const builds = selectedRoom.builds;
      const selectedBuild = builds.find(b => {
        return b.hotSpot === selectedHotSpot;
      });
      const room = roomData[roomName];

      const hotSpot = room.hotSpots.find(hs => {
        return hs.name === selectedHotSpot;
      });
      return (
        <>
          <div className={`${style.roomEditor}`}>
            <Layout
              roomName={selectedRoom.name}
              isSelectedForEdit={true}
              orientation={selectedRoom.orientation}
            />
          </div>
          <RotateButtons />
          <Dropdown
            name={"Select a room"}
            options={roomNames.map(rn => {
              return roomData[rn];
            })}
            selectedOption={selectedRoom.name}
            onSelect={name =>
              actions.changeRoom(name, roomData, selectedRoom, rooms)
            }
          />
          <h3>{"Hotspots"}</h3>
          {/* {room.hotSpots.map(hs => {
            return <Dropdown key={hs.name} name={hs.name} options={hs.builds}/>
          })} */}
          {hotSpot ? (
            <Dropdown
              key={hotSpot.name}
              options={hotSpot.builds}
              selectedOption={selectedBuild ? selectedBuild.name : "---"}
              onSelect={name => actions.changeBuild(name, hotSpot.name)}
            />
          ) : null}
        </>
      );
    }
  }

  function RotateButtons() {
    const { actions } = useContext(roomContext);
    return (
      <>
        <button onClick={() => actions.rotateRoom("ROTATE_CLOCKWISE")}>
          Rotate clockwise
        </button>
        <button onClick={() => actions.rotateRoom("ROTATE_COUNTERCLOCKWISE")}>
          Rotate counterclockwise
        </button>
      </>
    );
  }

  function NoRoomSelected() {
    return (
      // <>
      <h1>No Rooms Selected</h1>
      // </>
    );
  }
  return (
    <div>
      <button onClick={() => actions.saveRooms()}>Save Rooms</button>
      <button onClick={() => localStorage.removeItem("id")}>Clear Id</button>
      <button onClick={() => localStorage.removeItem("name")}>
        Clear Name
      </button>
      {selectedRoom ? <RoomSelected /> : <NoRoomSelected />}
    </div>
  );
}
