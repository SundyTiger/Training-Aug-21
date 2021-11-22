const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cookievalidator = require('./cookievalidator');
//Write MiddleWare
//Next
var myLogger = (req, res, next) => {
    console.log("Logged")
    next()
}
app.use(myLogger)

app.get('/', (req, res) => {
    res.send('Hello World!')
})

//req
var requesttime = (req,res,next)=>{
    req.requesttime = Date.now();
    next()

}
app.use(requesttime)

app.get('/time',(req,res)=>{
 var texy ='Hello GreenHood<br>';
 texy+=`<small>Requested at: ${req.requesttime}</small>`;
 res.send(texy);
})

//cookies
async function validateCookies(req,res,next){
    await cookievalidator(req.cookies);
    next();
}
app.use(cookieParser());
app.use(validateCookies);

//error handler
app.use(function(err,req,res,next){
    res.status(400).send(err.message);
})

app.listen(3000,()=>{
    console.log('Server is Running!!!')
});