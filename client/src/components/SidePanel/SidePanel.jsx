import React, { useContext, useState } from "react";
import style from "./SidePanel.module.css";
import RoomLayout from '../RoomLayout';
import RoomCost from '../RoomCost';

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