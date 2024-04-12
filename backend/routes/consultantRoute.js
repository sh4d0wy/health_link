const {getConsultants,postConsultants} =require('../controllers/consultanatController');

const express = require('express');
const  router= express.Router();

router
    .get('/',getConsultants)
    .post('/',postConsultants)

module.exports = router;