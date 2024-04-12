const emergency = require('../model/emergencyModel');
const user = require('../model/userModel');
const handleGetController=async (req,res)=>{
    const GetEmergency= await emergency.find({});
    if(!GetEmergency){
        res.json({
            message:"No Emergencies Found"
        })
    }
    res.status(200).json({
        GetEmergency
    })
}

const handlePostController=async (req,res)=>{
    const {UserId,Title,Location}=req.body;
    const EmergencyDetails= new emergency({
        UserId,
        Title,
        Location
    })
    try{
        EmergencyDetails.save();
        res.json({
            message:"OK"
        })
    }
    catch(e){
        res.json({
            "Error":e
        })
    }
}

const handlePutMessageController=async (req,res)=>{
    const {UserId}=req.body;
    try{
        await emergency.updateOne({UserId:UserId},{Accepted:true});
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

module.exports = {handleGetController,handlePostController,handlePutMessageController}