import React, { useEffect, useState } from "react";
import style from "./SidePanel.module.css";
import RoomEdit from '../RoomEdit';
import RoomCost from '../RoomCost';

export default function SidePanel() {
  const [openTab, setOpenTab] = useState('roomLayout');

  useEffect(() => {
    
    // return () => {
    //   effect
    // };
  })


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
      return <RoomEdit/>;
    case 'cost':
      return <RoomCost/>;
    default:
      return <RoomEdit/>;
  }
}