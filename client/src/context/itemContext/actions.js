// import { types } from "./reducers";
import axios from "axios";
// import * as roomData from "../../data/roomData";
import * as items from "../../data/itemData/itemConstatnts";
import itemIds from "../../data/itemData/itemIds";
import { types } from "./reducers";

const untradeables = ["Platinum token"];

function returnListOfItems() {
  let itemList = [];

  itemList = Object.values(items);

  // untradeables.forEach(ut => {
  //   itemList = itemList.filter(i => i !== ut);
  // });

  console.log(itemList.length);

  return itemList;
}

export const useActions = (state, dispatch) => {
  function compileItemList() {
    let itemList = [];
    itemList = returnListOfItems();
    // itemList = itemList.slice(99, 117);
    const updatedItems = state.items.slice();

    function request() {
      console.log("length:", itemList.length);
      if (itemList.length === 0) {
        return clearInterval(requestInterval);
      }

      let requestedItems = itemList.splice(0, 10);

      console.log("requested items:", requestedItems);

      axios
        .get("/api/items", { params: { items: requestedItems } })
        .then(res => {
          console.log(res);
          if (res.data.items) {
            const { items } = res.data;
            if (items) {
              items.forEach(i => {
                const index = updatedItems.findIndex(ui => {
                  return ui.name === i.name;
                });
                if (index === -1) {
                  updatedItems.push(i);
                } else {
                  updatedItems[index].exchangePrice = i.exchangePrice;
                }
              });

              dispatch({ type: types.updateItems, payload: updatedItems });
            }
          } else {
            console.log(res.data.message);
            return clearInterval(requestInterval);
          }
        });
    }

    request();
    const requestInterval = setInterval(request, 15000);
  }

  function createItems() {
    const items = returnListOfItems();
    axios.post("/api/createitems", { items });
  }

  function getItems() {
    axios.get("/db/items").then(res => {
      console.log(res);
      const { items } = res.data;

      dispatch({ type: types.updateItems, payload: items });
    });
  }

  function itemTest() {
    // const id = 10;
    // const items = itemIds.slice(0, 10);
    const items = itemIds;

    const itemData = []

    const calls = items.map(i => {
      return axios
        .get("https://www.osrsbox.com/osrsbox-db/items-json/" + i.id + ".json")
        .then(res => {
          const { tradeable, cost, url } = res.data;
          itemData.push(
            {
              id: i.id,
              name: i.name,
              tradeable,
              shopPrice: cost,
              exchangePrice: 1,
              url
            }
          )
        })
        .catch(err => {
          console.log(err);
        });
    });
    // const calls = items.map(i => {
    //   return axios
    //     .get("https://www.osrsbox.com/osrsbox-db/items-json/" + i.id + ".json")
    //     .then(res => {
    //       const item = res.data;
    //       if (item.name !== i.name) {
    //         console.log("Item name mismatch. Written:", i.name, "| Proper:", item.name)
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // });

    Promise.all(calls).then(() => {
      console.log("done");
    });
  }

  return {
    compileItemList,
    createItems,
    getItems,
    itemTest
  };
};
