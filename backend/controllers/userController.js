const {user} = require('../model/userModel');

const userGetController=(req,res)=>{
    const {id} = req.params;
    const data = user.findById(id);
    res.status(200).json({data});

}
const  userPostController=(req,res)=>{
    const details = req.body;
    const userCreated = new user(details)
    userCreated.save()
        .then((createdUser)=>{
            console.log("New User Created");
            res.status(201).json({message:"User created",data:createdUser})
        })
        .catch((error)=> {
            console.log(`Error in creating a user ${error}`);
            res.status(500).json({message:"Internal Server Error"})
        });
}

module.exports = {userGetController,userPostController}