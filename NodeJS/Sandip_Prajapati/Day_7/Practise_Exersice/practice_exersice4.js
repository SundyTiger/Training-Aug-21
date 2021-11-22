const express = require('express');
const customerRouter = require('./routes/customerRoutes');
const studentRouter = require('./routes/studentsRoutes');
const userRouter = require('./routes/routeUsers');
const app = express()
app.get('/',
    (req, res,next) => {
        res.send('Welcome to The Sinister Island!!!');
        res.end();
    }
);
app.use('/customers',customerRouter);
app.use('/students',studentRouter);
app.use('/users',userRouter);
app.listen(3000, () => console.log('Server is Running'));