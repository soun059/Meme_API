const router = require("express").Router();
const data = require("./index.json");
const dataAll = require("./indexAll.json");

router.post("/", (req, res) => {
  const searchParam = req.body.searchParam.toLowerCase();
  const all = data.data.filter((val) => {
    let hp = [];
    hp = val.names.filter((value) => {
      if (value.toLowerCase().includes(searchParam)) return value;
    });
    if (hp.length !== 0) return val;
  });
  res.send({
    status: all.length !== 0 ? "success" : "failure",
    data: all,
    error: all.length !== 0 ? "" : "No data found",
  });
});

module.exports = router;
