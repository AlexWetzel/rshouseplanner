const router = require("express").Router();
const osrs = require("osrs-wrapper");

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

router.get("/items", (req, res) => {
  const {items} = req.query;
  console.log('Items:', items)
  osrs.ge.getItems(items)
    .then(items => {
      items = items.map(i => {
        
        i = JSON.parse(i);
        return {
          name: i.item.name,
          price: i.item.current.price
        }
      })
      console.log('Returned', items.length, 'items');
      res.status(200).send({ message: 'ok', items });
    })
    .catch(err => console.log(err))
})

module.exports = router;