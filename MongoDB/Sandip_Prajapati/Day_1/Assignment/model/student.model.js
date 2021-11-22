const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongodb', { useNewUrlParser: true })
    .then(() => console.log("Database is Connected"))
    .catch(err => console.error(err))
const studentSchema = ({
    "_id": Number,
    "Name": String,
    "Addresh": String,
    "Fees": {
        "Amount": Number,
        "PaymentDate": Date,
        "Status": Boolean
    },
    "Result": {
        "Hindi": Number,
        "Eng": Number,
        "Math": Number,
        "Total": Number,
        "Grade": String
    }
})
const empSchema = new mongoose.Schema({
    _id: Number,
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    Assignments: [
        {
            _id: Number,
            AssignmentCategory: String,
            AssignmentName: String,
            AssignmentStatus: String
        },
    ]
})
const Students = mongoose.model('student', studentSchema);

const createStudent = async (std) => {
    try {
        const student = new Students(std)
        return await student.save()
    }
    catch (err) {
        console.log(err)
    }
}
const getStudent = async (id) => {
    try {
        const student = Students.findOne({ "_id": id })
        return student
    }
    catch (err) {
        console.log(err)
    }
}
module.exports = { createStudent, getStudent }