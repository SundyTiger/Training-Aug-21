const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mongodb', { useNewUrlParser: true })
    .then(() => console.log("Database is Connected"))
    .catch(err => console.error(err))
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
const Employees = mongoose.model('employee', empSchema);
const createEmployee = async (emp) => {
    try {
        const employee = new Employees(emp);
        return await employee.save()
    }
    catch (err) {
        console.log("crete Employee Error" + err)
    }

}
const getEmployee = async (id) => {
    try {
        const employee = Employees.findOne({ "_id": id });
        return employee

    }
    catch (err) {
        console.log("get Employee Error" + err)
    }
}

module.exports = { createEmployee, getEmployee }