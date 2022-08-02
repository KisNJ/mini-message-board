const mongoose=require("mongoose")
const { Schema } = mongoose;
const messageSchema=new Schema({
    text: {type:String,required:true},
    user: {type:String,required:true},
    added: {type:Date,required:true,default:new Date()},
})

module.exports=mongoose.model("Message",messageSchema)