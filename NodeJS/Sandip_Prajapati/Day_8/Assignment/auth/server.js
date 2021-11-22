require('dotenv').config();
const express =require('express');
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json())
const port = 3000;

function validateToken(req,res,next){
    const authHeader = req.headers.authorization;
    const token = authHeader.split(" ")[1]
    console.log(token)
    if(token == null)return res.sendStatus(400).send("Token not present");
    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
        if(err)
        {
            res.status(403).send("Token Invalid");
        }
        else{
            req.user = user
            next()
        }
    })
}
app.get('/posts',validateToken,(req,res)=>{
    console.log('Token is Valid');
    console.log(req.user.user);
    res.send(`${req.user.user} successfully accessed post`)
});
app.listen(port,()=>console.log('Exersice Started....'))