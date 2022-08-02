var express = require("express");
var router = express.Router();
let message=require("../messeges")

router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board",messages:messages });
});

module.exports = router;

