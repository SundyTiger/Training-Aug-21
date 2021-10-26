/*
Design a form for storing employee details. (EmployeeID, Employee name, age, Gender, designation, salary, location, Email ID, Date of Joining and contact number)
Validation required
EmployeeID should be at least 5 character long. use regular Expression
Age should be a number
Each field should contain value
Email ID should be in proper format
Date of joining should be in date format
Location should be in the drop down list
Use radio buttons for Gender
*/
//Creating RegEx Validation
var eid = /\w{5,}/i;
var wd = /([a-z]+|\s)/i;
var dgt = /\d+/;
var mbdgt = /\d{10}/;
//Validation Function
function Validation() {
    //Getting Form Value
    var EmpID = document.getElementById('empid').value;
    var EmpName = document.getElementById('empname').value;
    var Age = document.getElementById('age').value;
    var Designation = document.getElementById('design').value;
    var Salary = document.getElementById('salary').value;
    var contactNumber = document.getElementById('contact').value;
    //Check Validation for EmpID
    if (!EmpID.match(eid)) {
        alert('Need at least 5 character')
    }
    //Check Validation for EmpName
    if (!EmpName.match(wd) || EmpName.match(dgt)) {
        alert('Digits and Non-Word character Not allow')
    }
    //Check Validation For Age
    if (!Age.match(dgt)) {
        alert('Age Shoud be in Digit')
    }
    //Check Validation For Salary
    if (!Salary.match(dgt)) {
        alert('Salary Shoud be in Digit')
    }
    //Check Validation For Contact Number
    if (!contactNumber.match(mbdgt)) {
        alert('required 10 character')
    }

}