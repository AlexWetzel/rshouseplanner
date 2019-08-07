import * as roomData from "../data/roomData";

import { toCamelCase, shortPriceToLong } from "./parsers";

export function getBuildItems(room, items) {
  const buildItems = [];
  room.builds.forEach(selectedRoomBuild => {
    const roomName = toCamelCase(room.name);
    const hotSpotData = roomData[roomName].hotSpots.find(hS => {
      return hS.name === selectedRoomBuild.hotSpot;
    });
    const buildData = hotSpotData.builds.find(b => {
      return b.name === selectedRoomBuild.name;
    });
    buildData.materials.forEach(m => {
      buildItems.push(m);
    });
  });

  buildItems.map(bI => {
    const itemData = items.find(i => {
      return i.name === bI.name;
    });
    if (itemData) {
      const [longPrice, priceNum] = shortPriceToLong(itemData.exchangePrice);
      bI.shortPrice = itemData.exchangePrice;
      bI.longPrice = longPrice;
      bI.priceNum = priceNum;
    } else {
      bI.shortPrice = "---";
      bI.longPrice = "---";
      bI.priceNum = 0;
    }
    return bI;
  });
  // getItemData()

  return buildItems;
}

// export function getItemData(items) {
//   buildItems.map(bI => {
//     const itemData = items.find(i => {
//       return i.name === bI.name;
//     });
//     if (itemData) {
//       const [longPrice, priceNum] = shortPriceToLong(itemData.exchangePrice);
//       bI.shortPrice = itemData.exchangePrice;
//       bI.longPrice = longPrice;
//       bI.priceNum = priceNum;
//     } else {
//       bI.shortPrice = "---";
//       bI.longPrice = "---";
//       bI.priceNum = 0;
//     }
//     return bI;
//   });
//   return
// }
