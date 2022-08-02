var express = require("express");
var router = express.Router();
const message = require("../message");
router.get("/", function (req, res, next) {
  res.render("new", { title: "Add new user" });
});
router.post("/", (req, res) => {
  if (req.body.name !== "" && req.body.text !== "") {
    message
      .create({ user: req.body.name, text: req.body.text, added: new Date() })
      .then(() => {
        res.redirect("/");
      })
      .catch((e) => {
        console.log(e);
      });
  }else{
    res.redirect("/");
  }
});

module.exports = router;
