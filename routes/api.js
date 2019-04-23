const router = require("express").Router();

router.get("/hello", (req, res) => {
  res.send({message: "Hello!"});
});

module.exports = router;