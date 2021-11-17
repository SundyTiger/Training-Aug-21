const express = require('express')
const app = express();
// const verifyToken = require('./Controller/routes/verify.Controller');
const emailRoutes = require('../BackEnd/Controller/routes/emailRoutes.Controller');
app.use(emailRoutes);
// app.use(verifyToken);
app.listen(3000,()=>console.log('Server is Exersicing.............'));