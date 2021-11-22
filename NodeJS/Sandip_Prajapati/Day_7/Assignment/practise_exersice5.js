const express = require('express');
const app = express();
const employeesRouter = require('../Practise_Exersice/routes/employeeRoutes');
app.get('/',(req,res,next)=>{
    res.send('Welcome to The Sinister Island!!!');
    next();
});
app.use('/emp',employeesRouter);
app.listen(3000,()=>console.log('Server is Running>>>>>>>>'));