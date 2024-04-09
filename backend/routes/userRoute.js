const {userGetController,userPostController } = require('../controllers/userController');
const express = require('express');
const  router= express.Router();

router
    .get( '/:id', userGetController)
    .post('/',userPostController)

module.exports = router;