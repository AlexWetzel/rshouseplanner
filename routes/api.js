const router = require("express").Router();
const osrs = require("osrs-wrapper");
const db = require("../models");

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

// router.post("/item", (req, res) => {
//   db.Item.find({})
//   .then(items => {

//     const itemData = items.map( i => {
//       return {
//         name: i.name,
//         exchangePrice: i.exchangePrice
//       }
//     })
//     res.status(200).send({ message: "ok", items: itemData });
//   })
//   .catch(err => console.log(err));
// });

router.get("/items", (req, res) => {
  const { items: queryItems } = req.query;
  osrs.ge
    .getItems(queryItems)
    .then(apiItems => {
      console.log(apiItems);
      const updatedItems = apiItems.map(i => {
        i = JSON.parse(i);
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
            update: { exchangePrice: ui.exchangePrice}
          }
        }
      })

      db.Item.bulkWrite(updateOps)
        .then(result => {
          console.log(result.modifiedCount);
          res.status(200).send({ message: "ok", items: updatedItems });
        })
        .catch(err => console.log(err));
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
    .catch(err => console.log(err));
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
