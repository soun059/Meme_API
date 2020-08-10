const router = require("express").Router();
const data = require("./index.json");

router.post("/", (req, res) => {
  res.send({
    status: "success",
    data: data.data.filter((val) => data.buckets.indexOf(val.id) !== -1),
  });
});

module.exports = router;
