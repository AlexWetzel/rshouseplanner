const router = require("express").Router();
const osrs = require("osrs-wrapper");

router.get("/hello", (req, res) => {
  res.send({message: "Hello!"});
});

router.post("/player", (req, res) => {
  const name = req.body.name;
  osrs.hiscores.getPlayer(name)
    .then(player => {
      const playerData = {
        name: name,
        construction: player.Skills.Construction.level
      }
      res.send({ playerData });
    })
})

module.exports = router;