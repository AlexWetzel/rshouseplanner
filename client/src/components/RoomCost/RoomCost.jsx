import React, { useContext} from "react";
import { roomContext } from "../../context/roomContext/RoomContext";
import { itemContext } from "../../context/itemContext/ItemContext";

import * as roomData from "../../data/roomData";

import { toCamelCase, shortPriceToLong } from "../../helpers/parsers";

export default function RoomCost() {
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
      <h2>Total Room Cost</h2>

      <h3>Cost</h3>
      {itemList.map((i, index) => {
        const [longPrice, priceNum]= shortPriceToLong(i.price);
        console.log(priceNum, i.quantity)
        const cost = priceNum * i.quantity;
        return(<p key={index}>{`${i.name} | Item Price: ${longPrice} | Quantity: ${i.quantity} | Cost: ${cost.toLocaleString()}`}</p>)
      })}
    </>
  )
}
