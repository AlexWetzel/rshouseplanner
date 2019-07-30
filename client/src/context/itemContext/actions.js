import axios from "axios";
import itemIds from "../../data/itemData/itemIds";
import { types } from "./reducers";

export const useActions = (state, dispatch) => {
  function updateExchangePrices() {
     const updatedItems = state.items.slice();
    let tradeableItems = updatedItems.filter(i => {return i.tradeable === true})
    tradeableItems = tradeableItems.map(ti => {return ti.id});

    function request() {
      console.log("length:", tradeableItems.length);
      if (tradeableItems.length === 0) {
        return clearInterval(requestInterval);
      }

      let requestedItems = tradeableItems.splice(0, 10);

      console.log("requested items:", requestedItems);

      axios
        .get("/api/items", { params: { items: requestedItems } })
        .then(res => {
          console.log(res);
          if (res.data.items) {
            const { items } = res.data;
            // if (items) {
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
            // }
          } else {
            console.log(res.data.message);
            return clearInterval(requestInterval);
          }
        });
    }

    request();
    const requestInterval = setInterval(request, 15000);
  }

  function getItems() {
    axios.get("/db/items").then(res => {
      console.log(res);
      const { items } = res.data;

      dispatch({ type: types.updateItems, payload: items });
    });
  }

  function postItems() {
    const items = itemIds;

    const itemData = []

    const calls = items.map(i => {
      return axios
        .get("https://www.osrsbox.com/osrsbox-db/items-json/" + i.id + ".json")
        .then(res => {
          const { tradeable_on_ge, cost, wiki_url } = res.data;
          itemData.push(
            {
              id: i.id,
              name: i.name,
              tradeable: tradeable_on_ge,
              shopPrice: cost,
              exchangePrice: 1,
              wiki_url
            }
          )
        })
        .catch(err => {
          console.log(err);
        });
    });


    Promise.all(calls).then(() => {
      console.log(itemData);
      axios
        .post("db/items", { items: itemData })
        .then(res => {
          const { items } = res.data;
          console.log(res);
          dispatch({ type: types.updateItems, payload: items });
        })
        .catch(err => console.log(err))
    });
  }

  return {
    updateExchangePrices,
    getItems,
    postItems
  };
};
