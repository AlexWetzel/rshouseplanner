import React, { useContext } from 'react';
import style from './SidePanel.module.css';
import Layout from '../Layout';
import Dropdown from '../Dropdown/Dropdown';
import HotSpot from '../HotSpot/HotSpot';
import { roomContext } from '../../context/roomContext/RoomContext';

import * as roomData from '../../data/roomData';
import * as roomMaps from '../../data/roomMaps';

import toCamelCase from '../../helpers/toCamelCase';

export default function SidePanel() {
  const { state, actions } = useContext(roomContext);
  const { selectedRoom, rooms, selectedHotSpot } = state;

  const roomNames = Object.keys(roomData)
console.log(roomData)
  console.log(roomNames)

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
      const roomName = toCamelCase(selectedRoom.name);
      const builds = selectedRoom.builds;

      const room = roomData[roomName];
      const hotSpots = roomMaps[roomName];

      const hotSpot = room.hotSpots.find(hs => {return hs.name === selectedHotSpot})
      return(
        <>
          <div className={`${style.roomEditor}`}>
            <Layout name={selectedRoom.name}>
              {hotSpots.map(hs => {
                return <HotSpot
                  key={hs.name}
                  name={hs.name} 
                  position={hs.position}
                  face={selectedRoom.face}
                  builds={builds}
                  />
              })}
            </Layout>
          </div>
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
      <button onClick={() => actions.saveRooms()}>Save Rooms</button>
      {
        (selectedRoom) 
        ? <RoomSelected />
        : <NoRoomSelected />  
      }
    </div>
  )
}
