const express = require('express');
const router = express.Router();
const {createStudent,getStudent,removeStudent} = require('../../model/student.model');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const validateToken = require('../middleware/validate');
router.use(bodyParser.json());

router.post('/app/createStudent', async (req, res, next) => {
    try {
        const student = req.body;
        await createStudent(student)
        res.send("Student is Created");
    }
    catch (err) {
        console.log("Create Student Error: " + err)
    }
})

// router.post('/login/:id', (req, res, next) => {
//     const student = students.find(s => s.ID === parseInt(req.params.id));
//     if (!student) res.status(400).send("Invalid Login ID");
//     jwt.sign(student, 'thena', (err, token) => {
//         if (err) {
//             res.status(401).send('Error In Login ID');
//         }
//         else {
//             res.json({ token })
//         }
//     })
//     next();
// })
router.get('/login/:id', async (req, res, next) => {
    try {
        const student = await getStudent(parseInt(req.params.id))
        if (!student) return res.status(400).send("Invalid Login ID");
        jwt.sign(student.toJSON(), 'thena', (err, token) => {
            if (err) {
                res.status(401).send('Error In Login ID');
                console.log(err);
            }
            else {
                res.json({ token })
            }
        })
    }
    catch (err) {
        console.log("Get Student Error: " + err)
    }
    next()
})
router.post('/Fees', validateToken, (req, res) => {
    jwt.verify(req.token, 'thena', (err, authData) => {
        if (err) {
            res.status(402).send("Invalid Token")
        }
        else {
            res.json({
                "Student's Name": authData.Name,
                "Fees": authData.Fees
            })
        }
    })

})
router.post('/Result', validateToken, (req, res) => {
    jwt.verify(req.token, 'thena', (err, authData) => {
        if (err) {
            res.status(402).send("Invalid Token")
        }
        else {
            res.json({
                "Student's Name": authData.Name,
                "Fees": authData.Result
            })
        }
    })

})
router.delete('/deleteStudent',async(req,res)=>{
    try{
    const id = req.body.id
    const student = await removeStudent(id)
    res.json({
        message:`${student.Name}'s Data Removed!!!`
    })
    }
    catch(err)
    {
        console.log("Delete Student Error: "+err)
    }
})
module.exports = router;