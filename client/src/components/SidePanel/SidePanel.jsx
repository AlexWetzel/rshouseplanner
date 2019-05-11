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
  const { selectedRoom, rooms, selectedHotSpot } = state;

  const roomNames = Object.keys(roomData)

  function RoomSelected() {
    if (selectedRoom.name === 'No room'){
      return (
        <Dropdown
          name={'Select a room'}
          options={
            roomNames.map(rn => {return roomData[rn]})
          }
          onChange={e => actions.changeRoom(e, roomData, selectedRoom, rooms)}
        />
      )
    }
    else {
      const roomName = selectedRoom.name.toLowerCase();
      // const room = roomData.find(room => {
      //   return room.name === selectedRoom.name
      // });
      const room = roomData[roomName];
      const map = roomMaps[roomName];
      // console.log(room);
      // console.log(map);

      const hotSpot = room.hotSpots.find(hs => {return hs.name === selectedHotSpot})
      return(
        <>
          <Layout room={selectedRoom} hotSpots={map}/>
          <h3>{'Hotspots'}</h3>
          {/* {room.hotSpots.map(hs => {
            return <Dropdown key={hs.name} name={hs.name} options={hs.builds}/>
          })} */}
          {
            (hotSpot)
            ? <Dropdown
                key={hotSpot.name} 
                options={hotSpot.builds}
                onChange={e => actions.changeBuild(e, hotSpot.name, selectedRoom)}
              />
            : null
          }
          
        </>
      );
    }
 
  }

  function NoRoomSelected() {
    return(
      // <>
        <h1>No Rooms Selected</h1>

      // </>
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
