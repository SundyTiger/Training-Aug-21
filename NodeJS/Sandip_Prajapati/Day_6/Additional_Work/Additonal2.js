const express = require('express');
const app = express();
app.use(express.json());
const books = [
    {title:'NodeJS',id:1},
    {title:'MVC',id:2},
    {title:'DotNet',id:3}
]
app.get('/',(req,res)=>{
    res.send("Welcome to The Sinister Island!!");
})
app.get('/api/books',(req,res)=>{
    res.send(books);
})
app.get('/api/books/:id',(req,res)=>{
    let book = books.find(c=>c.id === parseInt(req.params.id));
    if(!book) res.status(404).send('<h2>404 Error Occur!!!</h2>');
    res.send(book);

})
app.listen(3001,()=>console.log(`Server is Running!!!!!!!`));