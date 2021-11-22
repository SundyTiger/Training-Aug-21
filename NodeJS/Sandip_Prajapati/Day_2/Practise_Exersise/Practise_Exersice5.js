const fs = require("fs");
// Write your address in one txt file and find out how many consonants are there.
fs.writeFile("sandy.txt","Nr Amber Cinema Road, Pologroud ,Himatnager",err=>{console.log(err)});

const readfile = fs.readFile("sandy.txt",'utf-8',(err,data)=>{
    lowerdata = data.toLowerCase().trim();
    let count = 0
    let constant = ["b","c","d","f","g","h","j","k","l","m","n","p","q","r","s","t","v","w","x","y","z"]
    for(x of lowerdata)
    {
        for(i of constant)
        {
            if(x==i)
            {
                count +=1
            }
        }
    }
    console.log(count);
})