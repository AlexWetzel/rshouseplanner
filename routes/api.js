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

router.get("/items", (req, res) => {
  let { items } = req.query;
  items = items.map(i=> {return parseInt(i)});
  console.log(items);
  osrs.ge
    .getItems(items)
    .then(apiItems => {
      const updatedItems = apiItems.map(i => {
        i = JSON.parse(i);
        console.log(i.item.name, i.item.current.price);
        return {
          id: i.item.id,
          exchangePrice: i.item.current.price
        };
      });

      console.log("Returned", updatedItems.length, "items");

      const updateOps = updatedItems.map(ui => {
        return {
          updateOne: {
            filter: { id: ui.id },
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


module.exports = router;
