let empData = [
    { "ID": 1, "Name": "Sandip", "City": "Himatnagar", "DOJ": new Date("2020-09-16") },
    { "ID": 2, "Name": "Kuldip", "City": "Ranasan", "DOJ": new Date("2021-01-16") },
    { "ID": 3, "Name": "Randip", "City": "Jaipur", "DOJ": new Date("2019-05-1") },
    { "ID": 4, "Name": "Pradip", "City": "Mumbai", "DOJ": new Date("2020-04-16") },
    { "ID": 5, "Name": "Mandip", "City": "Mumbai", "DOJ": new Date("2021-9-12") }
]
function searchByID(id: number) {
    let emp = empData.find(data => data.ID === id)
    console.log(emp)
}

// let year = empdata.filter((emp,i,arr)=>{

// })
searchByID(2)
let year = empData.filter((emp, i, arr) => {
    let year = emp.DOJ.getFullYear()
    if (year > 2020) {
        return emp
    }
})
console.log(year)
let data = empData.filter((emp, i, arr) => {
    let year = emp.DOJ.getFullYear()
    if (year > 2020 && emp.City == 'Mumbai') {
        return emp
    }
})
console.log(data)
