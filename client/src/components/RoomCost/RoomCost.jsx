import React, { useContext } from "react";
import { roomContext } from "../../context/roomContext/RoomContext";
import { itemContext } from "../../context/itemContext/ItemContext";
import { getBuildItems } from "../../helpers/itemHelpers";

export default function RoomCost() {
  const { state: roomState } = useContext(roomContext);
  const { selectedRoom } = roomState;
  const { state: itemState } = useContext(itemContext);
  const { items } = itemState;

  function totalCost(items) {
    let totalCost = 0;
    items.forEach(i => {
      totalCost += (i.priceNum * i.quantity);
    })
    return totalCost.toLocaleString()
  }

  const itemList = getBuildItems(selectedRoom, items);

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
