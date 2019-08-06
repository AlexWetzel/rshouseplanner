import React, { useContext } from "react";
import style from "./RoomLayout.module.css";
import Layout from "../Layout";
import { DropdownTwo, RoomOption, HotspotOption } from "../Dropdown";
import { roomContext } from "../../context/roomContext/RoomContext";
import { userContext } from "../../context/userContext/UserContext";

import * as roomData from "../../data/roomData";

import { toCamelCase } from "../../helpers/parsers";

export default function RoomLayout() {
  const { state, actions } = useContext(roomContext);
  const { selectedRoom, rooms, selectedHotSpot } = state;
  const { state: userState } = useContext(userContext);
  const { skills } = userState;

  const roomNames = Object.keys(roomData);

  function skillCheck(req) {
  
    const level = skills.Construction.level;
    console.log(req);
    return level >= req ? true : false;
  }

  function RoomNotSelected() {
    return <RoomDropDown />;
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
        <RoomDropDown />
        <h3>{"Hotspots"}</h3>
        {hotSpot ? <HotSpotSelected hotSpot={hotSpot} /> : null}
      </>
    );
  }

  function RoomDropDown() {
    const roomName = toCamelCase(selectedRoom.name);
    const selectedRoomData = roomData[roomName];

    const roomOptions = [
      <RoomOption
        key={"---"}
        name={"---"}
        onClick={() => actions.changeRoom("---")}
      />,
      roomNames.map(rn => {
        const data = roomData[rn];
        return (
          <RoomOption
            key={data.name}
            id={data.id}
            name={data.name}
            canBuild={skillCheck(data.level)}
            onClick={() => actions.changeRoom(data.name)}
          />
        );
      })
    ];

    return (
      <DropdownTwo
        title={"Select a room"}
        options={roomOptions}
        default={
          <RoomOption
            key={selectedRoom.name}
            id={selectedRoomData ? selectedRoomData.id : null}
            name={selectedRoom.name}
            onClick={() => {}}
          />
        }
      />
    );
  }

  function HotSpotSelected(props) {
    const { hotSpot } = props;
    const builds = selectedRoom.builds;
    const selectedBuild = builds.find(b => {
      return b.hotSpot === selectedHotSpot;
    });

    let selectedBuildData = null;

    if (selectedBuild) {
      selectedBuildData = hotSpot.builds.find(b => {
        return b.name === selectedBuild.name;
      });
    }

    const hotspotOptions = [
      <HotspotOption
        key={"---"}
        name={"---"}
        onClick={() => actions.changeBuild("---", hotSpot.name)}
      />,
      hotSpot.builds.map(b => {
        return (
          <HotspotOption
            key={b.name}
            id={b.id}
            name={b.name}
            canBuild={skillCheck(b.level)}
            onClick={() => actions.changeBuild(b.name, hotSpot.name)}
          />
        );
      })
    ];

    return (
      <DropdownTwo
        title={hotSpot.name}
        options={hotspotOptions}
        default={
          selectedBuild ? (
            <RoomOption
              key={selectedBuild.name}
              id={selectedBuildData.id}
              name={selectedBuild.name}
              onClick={() => {}}
            />
          ) : (
            <RoomOption key={"None"} name={"---"} onClick={() => {}} />
          )
        }
      />
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
