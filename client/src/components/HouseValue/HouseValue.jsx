import React, { useContext } from "react";
import { roomContext } from "../../context/roomContext/RoomContext";
import { itemContext } from "../../context/itemContext/ItemContext";
import { getBuildItems } from "../../helpers/itemHelpers";

export default function HouseValue() {
  const { state: roomState } = useContext(roomContext);
  const { rooms } = roomState;
  const { state: itemState } = useContext(itemContext);
  const { items } = itemState;

  function totalCost(items) {
    let totalCost = 0;
    items.forEach(i => {
      totalCost += i.priceNum * i.quantity;
    });
    return totalCost.toLocaleString();
  }

  const itemList = [];
  rooms.forEach(r => {
    const roomItems = getBuildItems(r, items);
    roomItems.forEach(i => {
      itemList.push(i);
    });
  });

  return (
    <div>
      <h2>House Value: {totalCost(itemList)}gp</h2>
    </div>
  );
}
