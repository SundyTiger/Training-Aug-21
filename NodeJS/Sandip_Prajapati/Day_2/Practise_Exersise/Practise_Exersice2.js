const fs =require("fs");
//Append hello India in person.txt.
const word = "Hello India"
fs.writeFile('person.txt',word,{flag:'a'},err=>{console.log(err)})