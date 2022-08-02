var express = require("express");
var router = express.Router();
// let messages=require("../messeges")
function goTo(res){
  res.redirect("/new")
}
const mongoose=require("mongoose")
const message=require("../message")
require('dotenv').config()
mongoose.connect(`mongodb+srv://${process.env.MONGO_DB_USERNAME}:${process.env.MONGO_DB_PASSWORD}@cluster0.f5ede.mongodb.net/?retryWrites=true&w=majority`, { autoIndex: false });
router.get("/", function (req, res, next) {
  async function run(){
    try {
      let messages=await message.find()
      res.render("index", { title: "Message Board",messages:messages,gotoNew:goTo,res:res });
    } catch (error) {
      console.log(error)
    }
  }
  run()
});

module.exports = router;

