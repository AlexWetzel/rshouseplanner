const router = require("express").Router();
const osrs = require("osrs-wrapper");

// router.post("/player", (req, res) => {
//   const name = req.body.name;
//   osrs.hiscores.getPlayer(name)
//     .then(player => {
//       console.log(player)
//       const playerData = {
//         name,
//         skills: player.Skills
//       }
//       res.send({ playerData });
//     })
// })

router.get("/player", (req, res) => {
  const {name} = req.query;
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

router.get

module.exports = router;