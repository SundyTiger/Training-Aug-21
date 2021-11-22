const express = require('express');
const router = express.Router();
const students = require('../../model/students.json');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const validateToken = require('../middleware/validate');
router.use(bodyParser.json());

router.post('/login/:id/',(req,res,next)=>{
    const student = students.find(s=>s.ID===parseInt(req.params.id));
    if(!student) res.status(400).send("Invalid Login ID");
    jwt.sign(student,'thena',(err,token)=>{
        if(err){
            res.status(401).send('Error In Login ID');
        }
        else{
            res.json({token})
        }
    })
    next();
})
router.post('/Fees',validateToken,(req,res)=>{
    jwt.verify(req.token,'thena',(err,authData)=>{
        if(err){
            res.status(402).send("Invalid Token")
        }
        else{
            res.json({
                "Student's Name":authData.Name,
                "Fees":authData.Fees
            })
        }
    })

})
router.post('/Result',validateToken,(req,res)=>{
    jwt.verify(req.token,'thena',(err,authData)=>{
        if(err){
            res.status(402).send("Invalid Token")
        }
        else{
            res.json({
                "Student's Name":authData.Name,
                "Fees":authData.Result
            })
        }
    })

})
module.exports = router;