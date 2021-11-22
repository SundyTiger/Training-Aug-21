const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/greenhood')
.then(()=>console.log("Connected To MongoDB"))
.catch(err=>console.log(new Error("Error Occur"+err)))

