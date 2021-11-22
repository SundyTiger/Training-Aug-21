const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Emps = require('../../model/employees.json');
const validateToken = require('../middleware/validate')
router.use(bodyParser.json());
router.post("/login/:id",(req,res,next)=>{
    const emp = Emps.find(emp=>emp.id ===parseInt(req.params.id));
    if(!emp) res.status(400).send("Invalid Employee ID");
    jwt.sign(emp,"Ikaris",(err,token)=>{
        if(err)
        {
            res.status(401).send('sign In Error');
        }
        else{
            res.json({token})
        }
    })
    next();
})
router.post('/assignments/:id',validateToken,(req,res)=>{
    jwt.verify(req.token,"Ikaris",(err,authData)=>{
        if(err)
        {
            res.status(403).send("Invalid Token!!!");
        }
        else{
            const assignment = authData.assignments.find(asg=>asg.AssignmentId===parseInt(req.params.id));
            if(!assignment) res.status(400).send("Invalid Assignment ID");
            res.json({
                "Employee Name":authData.FirstName+' '+authData.LastName,
                "Assignment ID":assignment.AssignmentId,
                "Assignment":assignment
            })
        }
    })
})
module.exports = router;