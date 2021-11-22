const express = require('express');
const jwt = require('jsonwebtoken');
const customers = require('../../Day_7/Practise_Exersice/json/customer.json');
const app = express();

app.get('/',(req,res)=>{
    res.json({
        message:'Welcome to The Sinister Land'
    })
})

app.post("/customers",verifytoken,(req,res)=>{
    jwt.verify(req.token,'secretkey',(err,authData)=>{
        if(err)
        {
            res.status(403);
        }
        else{
            res.json({
                message:"POST created......",
                authData
            })
        }
    })
})
app.post('/login/:id',(req,res)=>{
    const customer = customers.find(c=>c.id===parseInt(req.params.id));
    jwt.sign({user:customer},'secretkey',(err,token)=>{
        res.json({
            token
        })
    })

})
function verifytoken(req,res,next){
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== "undefined")
    {
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next()
    }
    else{
        res.send(403);
    }

}
app.listen(3000,()=>console.log('Ready for Exersice.....'));