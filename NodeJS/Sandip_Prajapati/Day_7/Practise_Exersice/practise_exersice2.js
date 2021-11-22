const express = require('express');
const app = express();
const userRouter = require('./routes/userRoute');
app.use(userRouter)

app.listen(3000,()=>console.log('Server is Running'));