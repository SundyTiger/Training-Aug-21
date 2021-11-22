const express = require('express');
const router = express.Router();
const Students = require('../json/students.json');
const { route } = require('./userRoute');
router.get('/',
    (req, res,next) => {
        res.send(Students);
        next()
    })
router.get('/:id',
    (req, res,next) => {
        const student = Students.find(s => s.ID === parseInt(req.params.id));
        if(!student) res.status(404).send("<h2>404 ERROR OCCUR</h2>");
        res.send(student);
        res.end();
    })
router.get('/:id/fees',
(req,res)=>{
    const student = Students.find(s => s.ID === parseInt(req.params.id));
    if(!student) res.status(404).send("<h2>404 ERROR OCCUR</h2>");
    res.send(student.Fees);
    res.end();
})
router.get('/:id/result',
(req,res)=>{
    const student = Students.find(s => s.ID === parseInt(req.params.id));
    if(!student) res.status(404).send("<h2>404 ERROR OCCUR</h2>");
    res.send(student.Result);
    res.end();
})
router.put('/:id/result/english',
(req,res)=>{
    const student = Students.find(s => s.ID === parseInt(req.params.id));
    if(!student) res.status(404).send("<h2>404 ERROR OCCUR</h2>");
    student.Result.Eng = parseInt(req.body.Eng);
    res.end();
});

module.exports =router;