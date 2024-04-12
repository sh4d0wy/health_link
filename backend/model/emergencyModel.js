const mongoose=require("mongoose");
const emergencySchema= new mongoose.Schema({
    UserId:{type:String, required:true},
    Title:{type:String, required:false},
    Location:{type: String,required:true},
    Accepted:{type:Boolean,default:false}
})

const emergency= mongoose.model("emergency",emergencySchema);

module.exports = emergency;
