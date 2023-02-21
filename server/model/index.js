const  mongoose  = require("mongoose");

const formModel=mongoose.model('users',{
    name:String,
    phoneNumber:String,
    emailAdress:String,
    webSite:String,
    location:String,
    colorTheme:String,
})
module.exports={formModel}