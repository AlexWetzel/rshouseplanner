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

// router.get("/items", (req, res) => {
//   const { items } = req.query;
//   osrs.ge
//     .getItems(items)
//     .then(items => {
//       console.log(items);
//       items = items.map(i => {
//         i = JSON.parse(i);
//         return {
//           name: i.item.name,
//           exchangePrice: i.item.current.price
//         };
//       });

//       console.log("Returned", items.length, "items");
//       res.status(200).send({ message: "ok", items });
//     })
//     .catch(err => console.log(err));
// });

router.get("/itemtest", (req, res) => {

  db.Items.find({})
    .then(items => {
      newItems.forEach(ni => {
        const item = items.find(i => {
          return i.name === items.name;
        });
      });
    })
    .catch(err => console.log(err));
});

router.post("/createitems", (req, res) => {

  const newItems = req.body.items.map(ni => {
    return {
      name: ni,
      exchangePrice: "1"
    }
  })

  console.log(newItems)
  db.Item.create(newItems)
    .then(items => {
      console.log(items);
      res.status(200).send();
    })
    .catch(err => console.log(err));
});

// router.get("/")

module.exports = router;
