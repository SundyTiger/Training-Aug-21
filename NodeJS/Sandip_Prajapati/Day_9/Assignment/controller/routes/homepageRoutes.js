const express = require('express');
const router = express.Router();
router.get('/',(req,res,next)=>{
    res.send("<h2>WelCome to My World</h2>");
    next();
})
module.exports = router;