const express = require("express");
const app = express();
const empRoutes = require('./controller/routes/empRoutes');
const homePageRoutes = require('./controller/routes/homepageRoutes');
const stdRoutes = require('./controller/routes/stdRoutes');
// const stdResultRoutes = require('./routes/stdResultRoutes');
app.use(homePageRoutes);
app.use('/emp',empRoutes);
app.use('/students',stdRoutes);
// app.use('/students',stdResultRoutes);
app.listen(3000,()=>{console.log("Exersice is Started")})
// Task: Implement Folder structute for the Node Application.

// Main Module of the Application will be Authentication,Student,Employee

// Employee->Assignment Module

// Student->Fees

// Student->Result