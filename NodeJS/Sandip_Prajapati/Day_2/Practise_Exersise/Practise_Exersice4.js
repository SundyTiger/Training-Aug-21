const fs = require('fs');
//Create two txt files, write some dummy text. Read two file content and print it in the console. use async and await.
const writeFile = (filename,data) =>{
    return new Promise((res,rej)=>{
        fs.writeFile(filename,data,err=>{
            console.log(err)
        })
        res();
    })
}
async function WritingFile(){
    await writeFile("sandy.txt","lorem ipsum tag")
    await writeFile("tiger.txt","Hello I am Green Hood")
}
WritingFile();

const readFile = (filename) =>{
    return new Promise((res,rej) =>{
        fs.readFile(filename,'utf-8',(err,data)=>{
            if(err)
            {
                console.log(err)
            }
            else{
                console.log(filename)
                console.log(data)
            }
        })
        res()
    })
}
async function readingFile(){
    await readFile("sandy.txt")
    await readFile("tiger.txt")
}
readingFile();