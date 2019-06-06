import React, { useContext, useState } from "react";
import style from "./SidePanel.module.css";
// import Layout from "../Layout";
// import Dropdown from "../Dropdown/Dropdown";
// import HotSpot from "../HotSpot/HotSpot";
import RoomLayout from '../RoomLayout';
import RoomCost from '../RoomCost';
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

