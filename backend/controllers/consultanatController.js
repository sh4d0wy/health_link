const {Consultant} = require('../model/consultantModel');

const  getConsultants = (req, res) =>{
    const data = Consultant.find({});
    res.json({msg:'ok',data:data});
}

module.exports = {getConsultants};
