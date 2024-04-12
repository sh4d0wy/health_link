const mongoose=require("mongoose");
const consultantSchema= new mongoose.Schema({
    name:{type:String,required:true},
    userRating:{type:Number,default:0},
    specialization:{type:String},
    location:{type:String}
})

const Consultant = mongoose.model('Consultant',consultantSchema);
module.exports = Consultant;