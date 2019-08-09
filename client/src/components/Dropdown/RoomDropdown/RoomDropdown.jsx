import React, { useContext } from "react";
import { DropdownTwo } from "../../Dropdown";
import RoomOption from "./RoomOption";
import { roomContext } from "../../../context/roomContext/RoomContext";
import { userContext } from "../../../context/userContext/UserContext";

import * as roomData from "../../../data/roomData";

import { toCamelCase } from "../../../helpers/parsers";

export default function RoomDropdown() {
  const { state, actions } = useContext(roomContext);
  const { selectedRoom, selectedFloor } = state;
  const { state: userState } = useContext(userContext);
  const { skills } = userState;

  const roomName = toCamelCase(selectedRoom.name);
  const selectedRoomData = roomData[roomName];

  const roomNames = Object.keys(roomData);

  function skillCheck(req) {
    const level = skills.Construction.level;
    return level >= req ? true : false;
  }

  function roomIsValidOnFloor(type) {
    switch (selectedFloor) {
      case 0:
        if (type === "indoor" || type === "outdoor") return true;
        else return false;
      case 1:
        if (type === "indoor") return true;
        else return false;
      case -1:
        if (type === "indoor" || type === "dungeon") return true;
        else return false;
      default:
        return false;
    }
  }

  const roomOptions = [
    <RoomOption
      key={"---"}
      name={"---"}
      canBuild={true}
      onClick={() => actions.changeRoom("---")}
    />,
    roomNames.map(rn => {
      const data = roomData[rn];

      if (roomIsValidOnFloor(data.type)) {
        return (
          <RoomOption
            key={data.name}
            id={data.id}
            name={data.name}
            level={data.level}
            price={data.price}
            canBuild={skillCheck(data.level)}
            onClick={() => actions.changeRoom(data.name)}
          />
        );
      } else return null;
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
          canBuild={true}
          onClick={() => {}}
        />
      }
    />
  );
}
