var express = require('express');
var router = express.Router();
let messages=require("../messeges")
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("new",{title:"Add new user"});
});
router.post("/",(req,res)=>{
  console.log(req.body)
  messages.push({user:req.body.name,text:req.body.text,added:new Date()})
  res.redirect("/")
})

module.exports = router;
