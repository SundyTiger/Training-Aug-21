const fs = require("fs");
//Create one folder files and move person.txt in that file.
fs.mkdir("Sundy",err=>{console.log(err)});
fs.copyFile("person.txt","Sundy\\person.txt",err=>{console.log(err)})
fs.rm("person.txt",err=>{console.log(err)});