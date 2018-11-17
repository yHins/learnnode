var express = require("express");
var router = express.Router();
var controller = require("./controller");

router.get("/index", controller.index);

module.exports = router;
