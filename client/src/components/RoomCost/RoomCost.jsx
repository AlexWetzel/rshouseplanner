import React, { useContext } from "react";
import { roomContext } from "../../context/roomContext/RoomContext";
import { itemContext } from "../../context/itemContext/ItemContext";

import * as roomData from "../../data/roomData";

import { toCamelCase, shortPriceToLong } from "../../helpers/parsers";

export default function RoomCost() {
  const { state: roomState } = useContext(roomContext);
  const { selectedRoom } = roomState;
  const { state: itemState } = useContext(itemContext);
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
        const [longPrice, priceNum]= shortPriceToLong(itemData.exchangePrice);
        bI.shortPrice = itemData.exchangePrice;
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

  // useEffect(() => {
  //   roomActions.calculateRoomCost();
  // })

  function totalCost(items) {
    let totalCost = 0;
    items.forEach(i => {
      totalCost += (i.priceNum * i.quantity);
    })
    return totalCost.toLocaleString()
  }

  const itemList = getBuildItems();
  // roomActions.calculateRoomCost(itemList);
  return (
    <>
      <h2>Total Room Cost</h2>
      {/* <p>{selectedRoom.cost.toLocaleString()}gp</p> */}
      <p>{totalCost(itemList)}gp</p>
      <h3>Cost</h3>
      {itemList.map((i, index) => {
        // const [longPrice, priceNum]= shortPriceToLong(i.price);
        // console.log(priceNum, i.quantity)
        const cost = i.priceNum * i.quantity;
        return(<p key={index}>{`${i.name} | Item Price: ${i.longPrice}gp | Quantity: ${i.quantity} | Cost: ${cost.toLocaleString()}gp`}</p>)
      })}
    </>
  )
}
