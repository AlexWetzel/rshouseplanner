const router = require("express").Router();
const db = require("../models");

router.get("/save", (req, res) => {
  // const name = req.body.name;

  const house = {
    rooms: [
      {
        name: "Bedroom",
        coordinates: "1,2",
        face: "n",
        builds: []
      },
      {
        name: "Garden",
        coordinates: "2,4",
        face: "s",
        builds: []
      }
    ]
  }

  db.House.create(house)
    .then(rooms => console.log('Rooms: ', rooms))
    .catch(err => console.log(err))


})

module.exports = router;