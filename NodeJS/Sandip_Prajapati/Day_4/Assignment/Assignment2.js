const http =require('http');
const url = require('url');
//Write a Nodejs server that serves as a RESTFUL API that takes two parameters in a GET call and produces their sum.
http.createServer((req,res) =>{
    let query = url.parse(req.url,true).query;
    let num1 = parseInt(query.param1);
    let num2 = parseInt(query.param2);
    res.write(`Number 1 = ${num1} and Number 2 = ${num2} Sum of Two Number = ${num1+num2}`);
    res.end();
    
}).listen(3001);