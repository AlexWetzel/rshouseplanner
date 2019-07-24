const router = require("express").Router();
const osrs = require("osrs-wrapper");
const db = require("../models");


/*
 * Runescape items are identified primarily by number, which is how they're searched in the official API
 * The osrs-wrapper supports searching for items by name, but the item names have to mapped to their ids
 * manually for this to work. Thus, if the package hasn't been updated to support newer items, they
 * cannot be searched by name using the wrapper. So, I wrote a "Band-aid" function to map item names to
 * their ids, rather than writing down each item's id manually.
 */
function itemBandAid(items) {
  return items = items.map(i => {
    switch(i) {
      case "Te salt":
        return 22593;
      case "Basalt":
        return 22603;
      case "Urt salt":
        return 22597;
      case "Ancient crystal":
        return 21804;
      case "Mysterious emblem (tier 10)":
        return 12756;
      default:
        return i
    }
  });
}

router.get("/player", (req, res) => {
  const { name } = req.query;
  osrs.hiscores.getPlayer(name).then(player => {
    console.log(player);
    const playerData = {
      name,
      skills: player.Skills
    };
    res.send({ playerData });
  });
});

router.get("/oneitem", (req, res) => {
  const { item } = req.query;

  // item = parseInt(item)
  osrs.ge.getItem(item)
    .then(item => {
        console.log(item);
    });
  // osrs.ge
  //   .getItem(item)
  //   .then(item => {
  //     item = JSON.parse(item);
  //     console.log(item.item.name, item.item.current.price);
  //     res.status(200).send({ message: "ok", item });
  //   })
  //   .catch(err => {
  //     console.log(err);
  //     res
  //       .status(500)
  //       .send({
  //         message: "Item not found"
  //       });
  //   });
});

router.get("/items", (req, res) => {
  const queryItems = itemBandAid(req.query.items);
  osrs.ge
    .getItems(queryItems)
    .then(apiItems => {
      const updatedItems = apiItems.map(i => {
        i = JSON.parse(i);
        console.log(i.item.name, i.item.current.price);
        return {
          name: i.item.name,
          exchangePrice: i.item.current.price
        };
      });

      console.log("Returned", updatedItems.length, "items");

      const updateOps = updatedItems.map(ui => {
        return {
          updateOne: {
            filter: { name: ui.name },
            update: { exchangePrice: ui.exchangePrice }
          }
        };
      });

      db.Item.bulkWrite(updateOps)
        .then(result => {
          console.log(result.modifiedCount);
          res.status(200).send({ message: "ok", items: updatedItems });
        })
        .catch(err => {
          console.log(err);
          res
            .status(500)
            .send({
              message: "There was an error writing item data in the database."
            });
        });
      // db.Item.find({})
      //   .then(itemData => {
      //     updatedItems.forEach(ui => {
      //       const dbItem = itemData.find(i => {
      //         return i.name === ui.name;
      //       });
      //       console.log("updating", ui.name, "price to", ui.exchangePrice);
      //       dbItem.exchangePrice = ui.exchangePrice;
      //     });
      //     // itemData.save();
      //     res.status(200).send({ message: "ok", items: updatedItems });
      //   })
      //   .catch(err => console.log(err));
    })
    .catch(err => {
      console.log(err);
      res
        .status(500)
        .send({
          message: "There was an error retreiving item data from the API."
        });
    });
});

// router.get("/itemtest", (req, res) => {

//   db.Items.find({})
//     .then(items => {
//       newItems.forEach(ni => {
//         const item = items.find(i => {
//           return i.name === items.name;
//         });
//       });
//     })
//     .catch(err => console.log(err));
// });

router.post("/createitems", (req, res) => {
  const newItems = req.body.items.map(ni => {
    return {
      name: ni,
      exchangePrice: "1"
    };
  });

  console.log(newItems);
  db.Item.create(newItems)
    .then(items => {
      console.log(items);
      res.status(200).send();
    })
    .catch(err => console.log(err));
});

// router.get("/")

module.exports = router;
