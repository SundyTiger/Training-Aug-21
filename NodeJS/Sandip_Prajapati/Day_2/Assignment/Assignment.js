const { Console } = require("console");
const fs = require('fs')
const { stdin, stdout,argv } = require("process");
// Do mathematical operation like Addition, subtraction, multiplication, div.

// Use case statement.

// Accept two numbers from the user from the command line.

// Create Separate function for add, sub, multi and div

// And store the result in one txt file. And display the result from file.
const readline1 = require("readline").createInterface({
    input:stdin,
    output:stdout
})
var result;
class calc{
    constructor(num1,num2)
    {
        this.num1 =parseInt(num1)
        this.num2 = parseInt(num2)
    }
    add(){
        result = this.num1+this.num2
        fs.writeFileSync("./calc.txt","Addition: "+result)

    }
    sub()
    {
        result = this.num1-this.num2
        fs.writeFileSync("./calc.txt","Substraction: "+result)
    }
    mul(){
        result = this.num1*this.num2
        fs.writeFileSync("./calc.txt","Multiplication: "+result)
    }
    div(){
        result = this.num1/this.num2
        fs.writeFileSync("./calc.txt","Division: "+result)
    }
}

let calculate = new calc(argv[2],argv[3])
readline1.question("Select One of the Operation: \n 1.Add \n 2.Sub \n 3.Mul \n 4.Div: \n ",opr=>{
    switch(opr){
        case 'Add': calculate.add();
        break;
        case 'Sub':calculate.sub();
        break;
        case 'Mul':calculate.mul();
        break;
        case 'Div':calculate.div();
        break;
        default:Console.log("Invalid Operator");
    }
    readline1.close()
})



