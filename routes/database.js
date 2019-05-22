const router = require("express").Router();
const db = require("../models");

router.post("/save", (req, res) => {
  const house = req.body.house;
  // const house = {
  //   rooms: [
  //     {
  //       name: "Bedroom",
  //       coordinates: "1,2",
  //       face: "n",
  //       builds: []
  //     },
  //     {
  //       name: "Garden",
  //       coordinates: "2,4",
  //       face: "s",
  //       builds: []
  //     }
  //   ]
  // }

  db.House.create(house)
    .then(rooms => {
      console.log('Rooms: ', rooms)
      const id = rooms._id;
      res.send({ id, message: "House saved successfully"})
    })
    .catch(err => console.log(err))


})

router.get("/find", (req, res) => {
  console.log(req.query.id);
  const id = req.query.id;
  db.House.findById(id)
    .then(house => {
      console.log(house)
      res.send({house: house.rooms});
    })
    .catch(err => console.log(err))
})

module.exports = router;