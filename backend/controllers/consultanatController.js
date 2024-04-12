const Consultant = require('../model/consultantModel');

const  getConsultants = async (req, res) =>{
    const data =await Consultant.find();
    res.send({msg:'ok',data:data});
}
const  postConsultants = async (req, res) =>{
    const data = req.body;
    const createdConsultant = new Consultant({...data});
    try{
        await createdConsultant.save();
        res.json({msg:'ok',data:data});
    }catch(e){
        console.log(e);
    }
    
}

module.exports = {getConsultants,postConsultants};
