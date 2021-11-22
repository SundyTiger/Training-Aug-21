const express = require('express');
const router = express.Router();
const { getStudent, createStudent, createEmployee, getEmployee } = require('./assignment');

router.use(express.json());
router.get('/app/getstudent/:id', async (req, res, next) => {
    try {
        const student = await getStudent(parseInt(req.params.id))
        res.send(student);
    }
    catch (err) {
        console.log("Get Student Error: " + err)
    }
    next()
})

router.post('/app/createStudent', async (req, res, next) => {
    try {
        const student = req.body;
        await createStudent(student);
        res.send("Student is Created");
    }
    catch (err) {
        console.log("Create Student Error: " + err)
    }
})

router.post('/app/createEmployee', async (req, res, next) => {
    try {
        const employee = req.body;
        await createEmployee(employee);
        res.send('Employee is Created')
    }
    catch (err) {
        console.log("Create Employee Error: " + err)
    }
})
router.get('/app/getEmployee/:id',async(req,res,next)=>{
    try{
    const employee = await getEmployee(parseInt(req.params.id));
    res.send(employee)
    }
    catch(err)
    {
        console.log('Get Employee Error: '+err);
    }
})
module.exports = router