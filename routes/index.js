var express = require("express");
var router = express.Router();
let messages=require("../messeges")

function goTo(res){
  res.redirect("/new")
}

router.get("/", function (req, res, next) {
  res.render("index", { title: "Message Board",messages:messages,gotoNew:goTo,res:res });
});

module.exports = router;

