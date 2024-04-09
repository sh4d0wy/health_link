const mongoose=require("mongoose");
const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    coins:{type:Number,default:0},
    medications:[String],
    allergies:[String],
    email:{type:String,lowercase: true,unique:true},
    pastSurgeries:{type:Boolean,default:false}
})

const user= mongoose.model("user",userSchema);
module.exports = user;
