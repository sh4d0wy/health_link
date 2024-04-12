const user = require('../model/userModel');

const userGetController=async (req,res)=>{
    const {id} = req.params;
    const data = await user.find({id});
    res.status(200).json({
        "data":data
    });
}

const  userPostController=async (req,res)=>{
    const details = req.body;
    const userCreated = new user(details)
    await userCreated.save()
        .then((createdUser)=>{
            console.log("New User Created");
            res.status(201).json({message:"User created",data:createdUser})
        })
        .catch((error)=> {
            console.log(`Error in creating a user ${error}`);
            res.status(500).json({message:"Internal Server Error"})
        });
}

const userPutController=async ()=>{
    const {UserId}=req.body;
    try{
        await emergency.updateOne({name:UserId},{Coins:Coins+1});
        res.json({
            message:"Updated"
        })
    }
    catch(e){
        res.json({
            "Error":e
        })
    }
}
module.exports = {userGetController,userPostController,userPutController}