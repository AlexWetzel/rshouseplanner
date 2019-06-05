// import { types } from "./reducers";
import axios from "axios";
import * as roomData from "../../data/roomData";

const untradeables = ['Platinum token']

function returnListOfItems() {
  let itemList = [];
  const gardenHotSpots = roomData.garden.hotSpots;

  gardenHotSpots.forEach( hs => {
    hs.builds.forEach( b => {
      b.materials.forEach( m => {
        const { name } = m;
        if (!itemList.includes(name) && !untradeables.includes(name)) {
          itemList.push(name);
        };
      });
    });
  });


  // gardenHotSpots[0].builds.forEach( b => {
  //     b.materials.forEach( m => {
  //       const { name } = m;
  //       if (!itemList.includes(name)) {
  //         itemList.push(name)
  //       };
  //     });
  // });

  return itemList;
}

export const useActions = (state, dispatch) => {
 
  function getPrices() {
    const items = [
      "oak plank",
      "teak plank",
      "mahogany plank"
    ]
    axios
      .get("/api/items", {params: {items}})
      .then(res => {
        console.log(res);
      });
  }

  function compileItemList() {
    const itemList = returnListOfItems();
    const items = [
      "oak plank",
      "teak plank",
      "mahogany plank"
    ]
    console.log(itemList);
    console.log(items)
    // const items = [
    //   "oak plank",
    //   "teak plank",
    //   "mahogany plank"
    // ]

    axios
      .get("/api/items", {params: {items: itemList}})
      .then(res => {
        console.log(res);
      });
  }

  return {
    compileItemList,
    getPrices
  };
};
