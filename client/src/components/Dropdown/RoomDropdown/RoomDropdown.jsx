import React, { useContext } from "react";
import { DropdownTwo } from "../../Dropdown";
import RoomOption from "./RoomOption";
import { roomContext } from "../../../context/roomContext/RoomContext";
import { userContext } from "../../../context/userContext/UserContext";

import * as roomData from "../../../data/roomData";

import { toCamelCase } from "../../../helpers/parsers";

export default function RoomDropdown() {
  const { state, actions } = useContext(roomContext);
  const { selectedRoom } = state;
  const { state: userState } = useContext(userContext);
  const { skills } = userState;

  const roomName = toCamelCase(selectedRoom.name);
  const selectedRoomData = roomData[roomName];

  const roomNames = Object.keys(roomData);

  function skillCheck(req) {  
    const level = skills.Construction.level;
    return level >= req ? true : false;
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
