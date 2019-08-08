import React, { useContext } from "react";
import { DropdownTwo } from "../../Dropdown";
import HotspotOption from "./HotspotOption";
import { roomContext } from "../../../context/roomContext/RoomContext";
import { userContext } from "../../../context/userContext/UserContext";
import { itemContext } from "../../../context/itemContext/ItemContext";

import * as roomData from "../../../data/roomData";

import { toCamelCase } from "../../../helpers/parsers";

export default function HotspotDropdown() {
  const { state, actions } = useContext(roomContext);
  const { selectedRoom, selectedHotSpot } = state;
  const { state: userState } = useContext(userContext);
  const { skills } = userState;

  const { state: itemState } = useContext(itemContext);
  const { items } = itemState;

  const roomName = toCamelCase(selectedRoom.name);
  const selectedRoomData = roomData[roomName];
  const hotSpot = selectedRoomData.hotSpots.find(hs => {
    return hs.name === selectedHotSpot;
  });

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

  function getIds(materials) {
    materials.map(m => {
      const itemData = items.find(i => {
        return i.name === m.name;
      });

      if (itemData) {
        m.id = itemData.id;
      } else {
        console.log("item not found");
      }
      return m;
    });

    return materials;
  }

  function skillCheck(req) {
    const level = skills.Construction.level;
    return level >= req ? true : false;
  }

  const hotspotOptions = [
    <HotspotOption
      key={"---"}
      name={"---"}
      canBuild={true}
      onClick={() => actions.changeBuild("---", hotSpot.name)}
    />,
    hotSpot.builds.map(b => {
      const mats = getIds(b.materials);
      // console.log(mats);
      return (
        <HotspotOption
          key={b.name}
          id={b.id}
          name={b.name}
          level={b.level}
          materials={mats}
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
          <HotspotOption
            key={selectedBuild.name}
            id={selectedBuildData.id}
            name={selectedBuild.name}
            level={selectedBuild.level}
            materials={getIds(selectedBuildData.materials)}
            onClick={() => {}}
          />
        ) : (
          <HotspotOption key={"None"} name={"---"} onClick={() => {}} />
        )
      }
    />
  );
}
