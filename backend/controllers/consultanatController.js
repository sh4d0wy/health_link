const {Consultant} = require('../model/consultantModel');

const  getConsultants =async (req, res) =>{
    const data =await Consultant.find({});
    res.json({message:'OK',data:data});
}

module.exports = {getConsultants};
