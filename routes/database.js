const router = require("express").Router();
const db = require("../models");

function formatItemData(itemData) {
  const items = itemData.map(i => {
    const { id, name, tradeable, shopPrice, exchangePrice, url } = i;
    return {
      id,
      name,
      exchangePrice,
      tradeable,
      shopPrice,
      exchangePrice,
      url
    };
  });
  return items;
}

router.post("/save", (req, res) => {
  const { house: newHouse, id } = req.body;
  console.log("House: ", newHouse);
  if (id) {
    console.log("ID found: ", id);
    db.House.findById(id)
      .then(house => {
        console.log(house);
        house.rooms = newHouse.rooms;
        house.save();
        res.send({
          message: "House saved successfully. Existing data overwritten."
        });
      })
      .catch(err => console.log(err));
  } else {
    db.House.create(house)
      .then(rooms => {
        console.log("Rooms: ", rooms);
        const id = rooms._id;
        res.send({ id, message: "House saved successfully" });
      })
      .catch(err => console.log(err));
  }
});

router.get("/find", (req, res) => {
  const { id } = req.query;
  db.House.findById(id)
    .then(house => {
      console.log(house);
      res.send({ house: house.rooms });
    })
    .catch(err => console.log(err));
});

router.get("/items", (req, res) => {
  db.Item.find({})
    .then(itemData => {
      // const items = itemData.map( i => {
      //   const { id, name, tradeable, shopPrice, exchangePrice, url } = i;
      //   return {
      //     id,
      //     name,
      //     exchangePrice,
      //     tradeable,
      //     shopPrice,
      //     exchangePrice,
      //     url
      //   };
      // });

      const items = formatItemData(itemData);

      res.status(200).send({ message: "ok", items });
    })
    .catch(err => console.log(err));
});

router.post("/items", (req, res) => {
  const { items } = req.body;
  console.log(items);
  db.Item.create(items)
    .then(itemData => {
      console.log(items);
      const items = formatItemData(itemData);
      res.status(200).send({ message: "ok", items });
    })
    .catch(err => console.log(err));
});

module.exports = router;
