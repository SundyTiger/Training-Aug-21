const express = require("express");
const router = express.Router();
const bodyParser = require("body-parser");
const jwt = require('jsonwebtoken');
const { createEmployee, getEmployee } = require('../../model/employee.model');
const validateToken = require('../middleware/validate')
router.use(bodyParser.json());
router.post('/register', async (req, res, next) => {
    try {
        const employee = req.body;
        await createEmployee(employee);
        res.send('Employee is Created')
        res.end()
    }
    catch (err) {
        console.log("Create Employee Error: " + err)
    }
})
router.post("/login/:id", async (req, res, next) => {
    try {
        const emp = await getEmployee(parseInt(req.params.id));
        if (!emp) {
            res.status(400).json({message:"Invalid Employee ID"})
            res.end()
        };
        await jwt.sign(emp.toJSON(), "Ikaris", (err, token) => {
            if (err) {
                res.json({message:'sign In Error'});
                res.end()
                console.log("Jwt eRRor: " + err)
            }
            else {
                res.json({token})
                res.end()
            }
        })
    }
    catch (err) {
        console.log("LogIn Error: " + err)
    }
})
router.post('/assignments/:id', validateToken, async (req, res) => {
    try {
        jwt.verify(req.token, "Ikaris", (err, authData) => {
            if (err) {
                res.status(403).send("Invalid Token!!!");
                res.end()
            }
            else {
                console.log(authData);
                const assignment = authData.Assignments.find(asg => asg._id === parseInt(req.params.id));
                if (!assignment) res.status(400).send("Invalid Assignment ID");
                res.json({
                    "Employee Name": authData.FirstName + ' ' + authData.LastName,
                    "Assignment ID": assignment._id,
                    "Assignment": assignment
                })
            }
        })
    }
    catch (err) {
        console.log("assignment Error: " + err)
    }
})
module.exports = router;