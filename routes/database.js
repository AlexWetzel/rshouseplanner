const router = require("express").Router();
const db = require("../models");

router.post("/save", (req, res) => {
  const { house: newHouse, id } = req.body;
  console.log("House: ", newHouse)
  if (id) {
    console.log("ID found: ", id);
    db.House.findById(id)
    .then(house => {
      console.log(house)
      house.rooms = newHouse.rooms;
      house.save()
      res.send({ message: "House saved successfully. Existing data overwritten." })
    })
    .catch(err => console.log(err))
  }
  else {
    db.House.create(house)
    .then(rooms => {
      console.log('Rooms: ', rooms)
      const id = rooms._id;
      res.send({ id, message: "House saved successfully" })
    })
    .catch(err => console.log(err))
  }

})

router.get("/find", (req, res) => {
  const { id } = req.query;
  db.House.findById(id)
  .then(house => {
    console.log(house)
    res.send({house: house.rooms});
  })
  .catch(err => console.log(err))
})

module.exports = router;