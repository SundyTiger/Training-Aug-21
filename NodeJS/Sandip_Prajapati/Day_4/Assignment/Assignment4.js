const http = require('http')
const url = require('url')
const fs = require('fs');
//Write a Nodejs server that serve as a RESTFUL API that accepts a file content and writes them to the disk.
http.createServer((req, res) => {
    let query = url.parse(req.url, true).pathname;
    let filename ='.'+String(query)+".txt"
    res.writeHead(200,{'Content-Type':'text/plain'})
    // let file = String(query.params);
    fs.readFile(filename, function (err, data) {

        if (err) {
            res.write("404 Error Occur")
            console.log(err)
            res.end()
        }
        else {
            res.write(`<p>${data}</p>`)
            res.end()
        }
    })
}).listen(3001)