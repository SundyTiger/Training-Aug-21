const express = require("express");
const app = express();
//Day9 task should be done MongoDB.
const empRoutes = require('./controller/routes/empRoutes');
const homePageRoutes = require('./controller/routes/homepageRoutes');
const stdRoutes = require('./controller/routes/stdRoutes');
// const employees = require('./controller/routes/employees.routes');
// const stdResultRoutes = require('./routes/stdResultRoutes');
app.use(homePageRoutes);
// app.use(employees);
app.use('/emp',empRoutes);
app.use('/students',stdRoutes);
// app.use('/students',stdResultRoutes);
app.listen(3000,()=>{console.log("Exersice is Started")})