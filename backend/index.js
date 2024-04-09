const express = require("express");
const mongoose=require("mongoose");
const app = express();
const userRouter = require('./routes/userRoute')
const consultantRouter = require('./routes/consultantRoute')
main()
.then(()=>{
    console.log("Database connected")
})
.catch((e)=>console.log(e))

async function main(){
    await mongoose.connect("mongodb+srv://sakshambhugra:healthlink@cluster0.x32gvme.mongodb.net/healthlink?retryWrites=true&w=majority&appName=Cluster0");
}

app.use(express.urlencoded({extended:true}));
app.use('/user',userRouter);
app.use('/consultant',consultantRouter);

app.listen(3001,()=>{
    console.log('Server is running on port 3001');
})