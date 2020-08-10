const router = require("express").Router();
const getMeme = require("./getMeme");
const getMemeSearch = require("./getMemeSearch");
const getMemeClues = require("./getMemeSearch");

router.use("/getMeme", getMeme);
router.use("/getMemeSearch", getMemeSearch);
router.use("/getMemeClues", getMemeSearch);

module.exports = router;
