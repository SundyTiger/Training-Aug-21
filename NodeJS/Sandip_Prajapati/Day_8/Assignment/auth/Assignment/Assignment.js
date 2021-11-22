const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
const bodyParser = require('body-parser');
const students = require('../../../Day_7/Practise_Exersice/json/students.json');
app.use(bodyParser.json());
//Create a login API, After a successfully log in we can access after that Result API, Fees API.
app.get(
    '/',
    (req,res)=>{
        res.send("Welcome to the Sinister Island!!")
    }
)
app.post('/students',validateToken,(req,res)=>{
    jwt.verify(req.token,'IamDebian',(err,authData)=>{
        if(err){
            res.status(403).send("Error in Token")
        }
        else{
            res.json({
                result:authData.Result,
                fees:authData.Fees
            })
        }
    })
})
app.post('/login/:id',(req,res)=>{
    const student = students.find(s=>s.ID === parseInt(req.params.id));
    jwt.sign(student,'IamDebian',(err,token)=>{
        if(err)
        {
            res.status(401).send("Sign In error")
        }
        else{
            res.json({token})
        }
    })
})
function validateToken(req,res,next){
    const bearerHeader = req.headers.authorization;
    if(typeof(bearerHeader)=='undefined')
    {
        res.status(401).send("Header is Undefined")
    }
    else{
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken
        next()
    }
}
app.listen(4000,()=>console.log("Exersice is On......."))