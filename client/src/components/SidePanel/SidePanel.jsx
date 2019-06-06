import React, { useContext, useState } from "react";
import style from "./SidePanel.module.css";
// import Layout from "../Layout";
// import Dropdown from "../Dropdown/Dropdown";
// import HotSpot from "../HotSpot/HotSpot";
import RoomLayout from '../RoomLayout';
import { roomContext } from "../../context/roomContext/RoomContext";
import { itemContext } from "../../context/itemContext/ItemContext";

import * as roomData from "../../data/roomData";
import * as roomMaps from "../../data/roomMaps";

import toCamelCase from "../../helpers/toCamelCase";

export default function SidePanel() {
  const [openTab, setOpenTab] = useState('roomLayout');

  return (
    <div className={`${style.sidePanel}`}>
      <div onClick={() => setOpenTab('roomLayout')}>Room Layout</div>
      <div onClick={() => setOpenTab('cost')}>Cost</div>
      <TabSwitch openTab={openTab} />
    </div>
  )
}

function TabSwitch(props) {
  switch(props.openTab) {
    case 'roomLayout':
      return <RoomLayout/>;
    case 'cost':
      return <RoomCost/>;
    default:
      return <RoomLayout/>;
  }
}


//========================================================================================

function RoomCost() {
  const { state: roomState, actions: roomActions } = useContext(roomContext);
  const { selectedRoom, rooms, selectedHotSpot } = roomState;
  const { state: itemState, actions: itemActions } = useContext(itemContext);
  const { items } = itemState;

  function getBuildItems() {
    const buildItems = [];
    selectedRoom.builds.forEach(selectedRoomBuild => {
      const roomName = toCamelCase(selectedRoom.name);
      const hotSpotData = roomData[roomName].hotSpots.find(hS => {
        return hS.name === selectedRoomBuild.hotSpot
      })
      const buildData = hotSpotData.builds.find(b => {
        return b.name === selectedRoomBuild.name
      })
      buildData.materials.forEach(m => {buildItems.push(m)});
    })

    buildItems.map(bI => {
      const itemData = items.find(i => {return i.name === bI.name});
      if (itemData) {
        bI.price = itemData.price;
      }
      else { 
        bI.price = '---';
      }
      return bI;
    })
    return buildItems;
  }

  const itemList = getBuildItems();

  return (
    <>
      <h3>Cost</h3>
      {itemList.map((i, index) => {
        return(<p key={index}>{`${i.name} | Quantity: ${i.quantity} | Price: ${i.price}`}</p>)
      })}
    </>
  )
}