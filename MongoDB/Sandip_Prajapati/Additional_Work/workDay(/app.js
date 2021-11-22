const express = require('express');
const routes = require('./router');
const app = express()
app.use(express.json())
app.use(routes)
app.listen(7777,()=>console.log('Server is Running...'))