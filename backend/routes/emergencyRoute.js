const express = require('express');
const  router = express.Router();
const {handleGetController,handlePostController,handlePutController}=require("../controllers/emergencyController")
router
.get("/",handleGetController)
.post("/",handlePostController)

module.exports = router;