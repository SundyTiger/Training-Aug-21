const express = require('express');
const app = express();
const userRouter = require('./routes/routeUsers');
app.get('/admin', userRouter,(req, res) => {
    res.sendStatus(401)
});
app.listen(
    3000,()=>console.log('I am Exersicing')
)
