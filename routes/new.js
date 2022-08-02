var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("new",{title:"Add new user"});
});
router.post("/",(req,res)=>{
  console.log(req.body)
  res.redirect("/")
})

module.exports = router;
