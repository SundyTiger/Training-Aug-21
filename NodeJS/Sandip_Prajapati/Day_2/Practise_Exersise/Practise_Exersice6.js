const fs = require("fs")
// Remove person.txt file.
fs.rm("person.txt",err=>{console.log(err)})