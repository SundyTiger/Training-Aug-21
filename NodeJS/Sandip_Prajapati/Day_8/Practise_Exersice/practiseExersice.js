require('dotenv').config();
const express = require('express');
const app =express();
const jwt = require('jsonwebtoken');
const bodyParser =require('body-parser');
const customers = require('../../Day_7/Practise_Exersice/json/customer.json');
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.json("Welcome to Sinister Island");
})
app.get('/customers',authenticateToken,(req,res)=>{
    res.json(customers.find(customer=>{customer.customerName===req.users.customerName;
        console.log("Requested: "+req.customerName);
        console.log("Database: "+customer.customerName);
    }));
})
app.post('/login',(req,res)=>{
    const customer = req.body.customerName;
    const accessToken = jwt.sign(customer,process.env.ACCESS_SECRET_TOKEN);
    res.json({accessToken:accessToken})
})
function authenticateToken (req,res,next){
    console.log(req.headers)
    const authHeader = req.headers['authorization'];
    console.log(authHeader)
    const token = authHeader && authHeader.split(" ")[1]
    if(token==null) res.sendStatus(401);
    jwt.verify(token,process.env.ACCESS_SECRET_TOKEN,(err,users)=>{
        if(err)res.sendStatus(403);
        req.customer = users
        next()
    })

}
app.listen(3000,()=>console.log('Running'))