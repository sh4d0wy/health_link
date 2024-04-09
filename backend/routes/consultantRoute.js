const {getConsultants} =require('../controllers/consultanatController');

const express = require('express');
const  router= express.Router();

router
    .get('/',getConsultants);

module.exports = router;