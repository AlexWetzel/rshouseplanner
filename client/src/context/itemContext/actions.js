// import { types } from "./reducers";
import axios from "axios";
// import * as roomData from "../../data/roomData";
import * as items from "../../data/itemData/itemConstatnts";
import { types } from "./reducers";

const untradeables = ['Platinum token']

function returnListOfItems() {
  let itemList = [];

  // const roomNames = Object.keys(roomData);

  itemList = Object.values(items);

  untradeables.forEach(ut => {
    // const index = itemList.findIndex(i => {return ut === i})
    // itemList.splice(index, 1);
    itemList = itemList.filter(i => i !== ut);
  });
  // const hotSpots = roomData.kitchen.hotSpots;
  // const parlourHotSpots = roomData.parlour.hotSpots;

  // hotSpots.forEach( hs => {
  //   hs.builds.forEach( b => {
  //     b.materials.forEach( m => {
  //       const { name } = m;
  //       if (!itemList.includes(name) && !untradeables.includes(name)) {
  //         itemList.push(name);
  //       };
  //     });
  //   });
  // });

  // parlourHotSpots.forEach( hs => {
  //   hs.builds.forEach( b => {
  //     b.materials.forEach( m => {
  //       const { name } = m;
  //       if (!itemList.includes(name) && !untradeables.includes(name)) {
  //         itemList.push(name);
  //       };
  //     });
  //   });
  // });


  // roomNames.forEach( rn => {
  //   roomData[rn].hotSpots.forEach( hs => {
  //     hs.builds.forEach( b => {
  //       b.materials.forEach( m => {
  //         const { name } = m;
  //         if (!itemList.includes(name) && !untradeables.includes(name)) {
  //           itemList.push(name);
  //         };
  //       });
  //     });
  //   });
  // })

  console.log(itemList.length)

  return itemList;
}

export const useActions = (state, dispatch) => {
 
  // function getPrices() {
  //   const items = [
  //     "oak plank",
  //     "teak plank",
  //     "mahogany plank"
  //   ]
  //   axios
  //     .get("/api/items", {params: {items}})
  //     .then(res => {
  //       console.log(res);
  //     });
  // }

  function compileItemList() {
    let itemList = [];
    itemList = returnListOfItems();
    const updatedItems = state.items.slice();
      
    function request() {
      console.log('length:', itemList.length);
      if (itemList.length === 0) {
        return clearInterval(requestInterval);
      }

      let requestedItems = itemList.splice(0, 20);

      console.log('requested items:', requestedItems);
 
      axios
        .get("/api/items", {params: {items: requestedItems}})
        .then(res => {
          console.log(res);
          const { items } = res.data
          if (items) {
            items.forEach(i => {
              const index = updatedItems.findIndex(ui => {
                return ui.name === i.name;
              })
              if (index === -1) {
                updatedItems.push(i);
              }
              else {
                updatedItems[index].price = i.price;
              }
            });
            
            dispatch({type: types.updateItems, payload: updatedItems})
          };
        });
    }

    request();
    const requestInterval = setInterval(request, 5000);
    
   }

  return {
    compileItemList
    // getPrices
  };
};
