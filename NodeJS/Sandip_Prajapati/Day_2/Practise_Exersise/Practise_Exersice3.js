const fs = require('fs')
// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })

  
//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })
// Accept your name from command line. And append it to person.txt as “hello “+“name”.
const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
})
readline.question("What's Your Name? \n",name=>{
    const yourname = `Hi ${name}`
    fs.writeFile('person.txt',yourname,err=>{console.log(err)})
    readline.close()
})