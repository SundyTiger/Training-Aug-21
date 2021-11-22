const express = require('express');
const app = express();
app.use(express.json());
const Students = [{
    "ID": 1, "Name": "Reena", "Address": "Ahmedabad", "Fees": { "Amount": 10000, "PaymentDate": "12/12/2020", "Status": "true" }, "Result": { "Hindi": 80, "Eng": 70, "Math": 60, "Total": 210, "Grade": "A" }

}, {
    "ID": 2, "Name": "Rita", "Address": "Surat", "Fees": {
        "Amount": 12000, "PaymentDate": "12 / 12 / 2020", "Status": "false"
    },

    "Result": { "Hindi": 80, "Eng": 70, "Math": 60, "Total": 210, "Grade": "A" }

}]
app.get('/',
    (req, res) => {
        res.send("<h2>Welcome to The Sinister Island</h2>");
        res.end()
    }
);
// Create a RESTFUL API which will return a Studentlist.
app.get('/students',
    (req, res) => {
        res.send(Students);
        res.end();
    })
//Create RESTFUL API which will return a Particular Student Record
app.get('/students/:id',
    (req, res) => {
        const student = Students.find(s => s.ID === parseInt(req.params.id));
        if(!student) res.status(404).send("<h2>404 ERROR OCCUR</h2>");
        res.send(student);
        res.end();
    })
// Create a RESTFUL API which return a particular student FEES Record.
app.get('/students/:id/fees',
(req,res)=>{
    const student = Students.find(s => s.ID === parseInt(req.params.id));
    if(!student) res.status(404).send("<h2>404 ERROR OCCUR</h2>");
    res.send(student.Fees);
    res.end();
})
//Create a RESTFUL API which will return a particular student Exam Result. 
app.get('/students/:id/result',
(req,res)=>{
    const student = Students.find(s => s.ID === parseInt(req.params.id));
    if(!student) res.status(404).send("<h2>404 ERROR OCCUR</h2>");
    res.send(student.Result);
    res.end();
})
//Create a RESTFUL API which will update a result of result of student id 1. Update the marks for English Subject.
app.put('/students/:id/result/english',
(req,res)=>{
    const student = Students.find(s => s.ID === parseInt(req.params.id));
    if(!student) res.status(404).send("<h2>404 ERROR OCCUR</h2>");
    student.Result.Eng = parseInt(req.body.Eng);
});
app.listen(3000, () => console.log('Server is Running'))