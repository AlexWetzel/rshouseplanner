import React, { useContext } from 'react';
import style from './SidePanel.module.css';
import Layout from '../Layout';
import Dropdown from '../Dropdown/Dropdown';
import { StoreContext } from '../../context/StoreContext';
import { types } from '../../context/reducers';

import * as roomData from '../../data/roomData';
import * as roomMaps from '../../data/roomMaps';

export default function SidePanel() {
  const { state, dispatch, actions } = useContext(StoreContext);
  const { selectedRoom } = state;

  function RoomSelected() {
    const roomName = selectedRoom.name.toLowerCase();
    // const room = roomData.find(room => {
    //   return room.name === selectedRoom.name
    // });
    const room = roomData[roomName];
    const map = roomMaps[roomName];
    console.log(room);
    console.log(map);

    return(
      <>
        <Layout room={selectedRoom} hotSpots={map}/>
        <h3>{'Hotspots'}</h3>
        {room.hotSpots.map(hs => {
          return <Dropdown key={hs.name} name={hs.name} builds={hs.builds}/>
        })}
      </>
    );
  }

  function NoRoomSelected() {
    return(
      <h1>No Rooms Selected</h1>
    )
  }
  return (
    <div className={`${style.sidePanel}`}>
       {
        (selectedRoom) 
        ? <RoomSelected />
        : <NoRoomSelected />  
        }
      
      {/* <button onClick={() => actions.test()}>test</button> */}

 
      

      
    </div>
  )
}
