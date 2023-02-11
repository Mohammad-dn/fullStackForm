const  mongoose  = require("mongoose");

const formModel=mongoose.model('users',{
    phoneNumber:String,
    emailAdress:String,
    webSite:String,
    location:String
})
module.exports={formModel}