const router = require("express").Router();
const osrs = require("osrs-wrapper");

router.post("/player", (req, res) => {
  const name = req.body.name;
  osrs.hiscores.getPlayer(name)
    .then(player => {
      console.log(player)
      const playerData = {
        name,
        skills: player.Skills
      }
      res.send({ playerData });
    })
})

module.exports = router;