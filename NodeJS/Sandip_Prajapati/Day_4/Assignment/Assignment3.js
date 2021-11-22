const http = require('http');
const url = require('url');
//Write a Nodejs server that serves as a RESTFUL API that accepts a string as an input name and returns the first vowel character from the string.
http.createServer((req,res)=>{
    let que = url.parse(req.url,true).query;
    let string = que.input;
    let vowel ='aeiou'
    let lowstring = String(string).toLowerCase();
    let count =0;
    for(let x of lowstring)
    {
        for(let y of vowel)
        {
            if(x==y)
            {
                count +=1
                res.write('String '+lowstring+"'s"+' first vowel character is '+x)
            }
        }
        if(count==1)
        {
            break;
        }
     }
    res.end();
}).listen(3001)