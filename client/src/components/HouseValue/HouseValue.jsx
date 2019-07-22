import React, { useContext } from 'react'
import { roomContext } from "../../context/roomContext/RoomContext";
import { itemContext } from "../../context/itemContext/ItemContext";

import * as roomData from "../../data/roomData";

import { toCamelCase, shortPriceToLong } from "../../helpers/parsers";

export default function HouseValue() {
  const { state: roomState } = useContext(roomContext);
  const { rooms } = roomState;
  const { state: itemState } = useContext(itemContext);
  const { items } = itemState;

  function getBuildItems(room) {
    const buildItems = [];
    console.log(room)
    room.builds.forEach(RoomBuild => {
      const roomName = toCamelCase(room.name);
      const hotSpotData = roomData[roomName].hotSpots.find(hS => {
        return hS.name === RoomBuild.hotSpot
      })
      const buildData = hotSpotData.builds.find(b => {
        return b.name === RoomBuild.name
      })
      buildData.materials.forEach(m => {buildItems.push(m)});
    })

    buildItems.map(bI => {
      const itemData = items.find(i => {return i.name === bI.name});
      if (itemData) {
        const [longPrice, priceNum]= shortPriceToLong(itemData.price);
        bI.shortPrice = itemData.price;
        bI.longPrice = longPrice;
        bI.priceNum = priceNum;
      }
      else { 
        bI.shortPrice = '---';
        bI.longPrice = '---';
        bI.priceNum = 0;
      }
      return bI;
    });
    return buildItems;
  }

  function totalCost(items) {
    let totalCost = 0;
    items.forEach(i => {
      totalCost += (i.priceNum * i.quantity);
    })
    return totalCost.toLocaleString()
  }

  const itemList = []
  rooms.forEach(r => {
    const roomItems = getBuildItems(r)
    roomItems.forEach(i => {itemList.push(i)})
  })

  return (
    <div>
      <h2>House Value: {totalCost(itemList)}gp</h2>
    </div>
  )
}
