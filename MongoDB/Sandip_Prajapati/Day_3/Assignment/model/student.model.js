const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongodb', { useNewUrlParser: true })
    .then(() => console.log("Database is Connected"))
    .catch(err => console.error(err))
const studentSchema = ({
    "_id": { type: Number, required: true },
    "Name": { type: String, required: true },
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
const Students = mongoose.model('student', studentSchema);

const createStudent = async (std) => {
    try {
        const student = new Students(std)
        return await student.save()
    }
    catch (err) {
        console.log(err)
        return err
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
const removeStudent = async (id) => {
    try {
        const student = Students.findByIdAndRemove(id)
        return student

    }
    catch (err) {
        console.log("Remove Student Error: " + err)
    }
}
module.exports = { createStudent, getStudent, removeStudent }