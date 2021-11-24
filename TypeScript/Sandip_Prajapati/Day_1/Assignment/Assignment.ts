let empdata: { ID: number, FirstName: string, LastName: string, Address: string, Salary: number }[] = [{ ID: 1, FirstName: "Sandip", LastName: "Prajapati", Address: "Himatnagar", Salary: 5000000 },
{ ID: 2, FirstName: "Harsh", LastName: "Prajapati", Address: "1,Gandhinagar,Gujarat", Salary: 700000 },
{ ID: 3, FirstName: "Uttam", LastName: "Patel", Address: "2,Kadi,Gujarat", Salary: 1000000 },
{ ID: 4, FirstName: "Raviraaj", LastName: "Padiyaar", Address: "3,Katch,Gujarat", Salary: 7000000 },
{ ID: 5, FirstName: "Rutvik", LastName: "Prajapati", Address: "4,Modasa,Gujarat", Salary: 3000000 }]
let emp: {
    ID: number;
    FullName: string;
    Address: {
        FlatNumber: string;
        City: string;
        State: string;
    };
    PF: number;
    TotalSalary: number;
}[] = []
let employeesData: any[] = []
class Empoyees {
    searchByIndex(i: number) {
        const emp = empdata[i]
        console.log(emp)
    }
    searchByID(id: number) {

        const emp = empdata.filter((empdata, index, arr) => {
            return empdata.ID === id
        })
        console.log(emp)
    }
    insertEmployee(emp: { ID: number, FirstName: string, LastName: string, Address: string, Salary: number }) {
        empdata.push(emp)
        console.log(empdata)
    }
    deleteEmployee(id: number) {
        const employee: number = empdata.findIndex((emp) => { return (emp.ID === id) })
        empdata.splice(employee, 1)
        console.log(empdata)
    }
    jointheArray() {
        const employee = empdata.filter((empdata, index, arr) => {
            const address: string[] = empdata.Address.split(',')
            const employee = {
                ID: empdata.ID,
                FullName: empdata.FirstName + " " + empdata.LastName,
                Address: {
                    FlatNumber: address[0],
                    City: address[1],
                    State: address[2]
                },
                PF: (empdata.Salary % 20),
                TotalSalary: empdata.Salary
            }
            emp.concat(employee)
        })
        console.log(employee)
        employeesData.concat(empdata, emp)
        console.log("Emp Array: " + emp)
        console.log("Employee Data: " + empdata)
        console.log("Join the Array: " + employeesData)

    }
}

const emplObject = new Empoyees()
// emplObject.searchByID(1)
// emplObject.searchByIndex(3)
// emplObject.insertEmployee({ID:5,FirstName:"JD",LastName:"Watson",Address:"5,Ajmer,Rajsthan",Salary:300000})
// emplObject.deleteEmployee(1)
emplObject.jointheArray()
console.log("Emp Array: " + emp)
console.log("Employee Data: " + empdata)
console.log("Join the Array: " + employeesData)