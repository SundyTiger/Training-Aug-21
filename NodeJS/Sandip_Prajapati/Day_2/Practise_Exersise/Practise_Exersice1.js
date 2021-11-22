const fs =require("fs")
const word = "Hello World";
// Create one txt file name it as person.txt and write in that hello world
fs.writeFile('person.txt',word,err=>{console.log(err)})
