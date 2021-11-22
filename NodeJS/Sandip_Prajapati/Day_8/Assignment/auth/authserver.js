require('dotenv').config();
const express = require('express');
const bcrypt = require('bcryptjs')
const app = express();
const jwt = require('jsonwebtoken');
app.use(express.json());
const users = []

app.post('/createUser',async(req,res,next)=>{
    try{
    const user = req.body.name;
    const hashedPassword = await bcrypt.hash(req.body.password,7);
    
    users.push({"user":user,"password":hashedPassword});
    res.status(200).send(users);
    console.log(users);
    }
    catch(err){
        console.log('Error Occur'+err)
    }

})
app.post('/login',async(req,res)=>{
    const user = users.find(c=>c.user == req.body.name);
    if(user == null) return res.status(404).send("User Not Found");
    if(await bcrypt.compare(req.body.password,user.password))
    {
        const accessToken = generateAccessToken({user:req.body.name});
        const refrenshToken = generateRefreshToken({user:req.body.name});
        res.json({accessToken:accessToken,refrenshToken:refrenshToken})
    }
    else{
        res.status(401).send("Passwprd Incorrect!")
    }
})
function generateAccessToken(user)
{
    return jwt.sign(user,process.env.ACCESS_TOKEN_SECRET,{expiresIn:"30m"})
}
let refrenshTokens = []
function generateRefreshToken(user)
{
    const refrenshToken =jwt.sign(user,process.env.REFRESH_TOKEN_SECRET,{expiresIn:"40m"});
    refrenshTokens.push(refrenshToken);
    return refrenshToken
}
app.post('/refreshToken',(req,res)=>{
    if(!refrenshTokens.includes(req.body.token))
    {
        res.status(400).send("Refresh Token Invalid!!");
    }
    refrenshTokens = refrenshTokens.filter((c)=> c!=req.body.token);
    const accessToken = generateAccessToken({user:req.body.name})
    const refreshToken = generateRefreshToken({user:req.body.name})
    res.json({accessToken:accessToken,refreshToken:refreshToken})
})
app.delete("/logout",(req,res)=>{
    try{
    refrenshTokens = refrenshTokens.filter((c)=>c!=req.body.token)
    res.status(204).send("Logged Out!!")
    }
    catch(err)
    {
        console.error("Error: "+err);
    }
})
app.listen(3001,()=>console.log('Autherization is running on 3001'))