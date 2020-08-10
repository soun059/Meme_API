const router = require("express").Router();
const data = require("./index.json");

router.post("/", (req, res) => {
  res.send({
    status: "success",
    data: data,
  });
});

module.exports = router;
