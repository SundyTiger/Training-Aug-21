function validateToken(req,res,next){
    const bearerHeader =req.headers.authorization;
    if(typeof(bearerHeader)==='undefined')
    {
        res.status(402).send("Header is Undefinded");
    }
    else{
        const bearerToken = bearerHeader.split(" ")[1];
        req.token = bearerToken;
        next();
    }
}

module.exports = validateToken;