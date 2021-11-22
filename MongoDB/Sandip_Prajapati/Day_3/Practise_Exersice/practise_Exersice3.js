const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/greenhood')
    .then(() => console.log("DB is Connected......"))
    .catch(err => new Error("Error Occur " + err));

const empSchema = new mongoose.Schema({
    Name: { type: String, required: true },
    Address: String,
    Skills: String
})

const Employees = mongoose.model('empcollection', empSchema);

async function createEmp() {
    const emp = new Employees(
        //{
        //     Name:"Sandip B. Prajapati",
        //     Address:"Himatnagar",
        //     Skills:"MERN Stack"
        // }
        // ,
        //,
        // {
        //     Name:"Ravi G. Koli",
        //     Address:"Himatnagar",
        //     Skills:"Account"
        // }
        //,
        // {
        //     Name:"Harsh D. Prajapati",
        //     Address:"Gandhinagar",
        //     Skills:"MERN Stack"
        // } 
        //,
        {
            Name: "Uttam R. Patel",
            Address: "Kadi",
            Skills: "Dot Net"
        }
    )
    try {
        const result = await emp.save();
        console.log(result);
    }
    catch (err) {
        new Error("Error :" + err)
    }
}
// createEmp();