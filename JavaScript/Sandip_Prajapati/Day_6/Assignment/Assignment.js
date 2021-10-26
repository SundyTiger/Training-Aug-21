// Display Product information in Grid format with AddToCart option. once a user click on AddtoCart button should be stored in local storage. Click on cart summary will display that data into console.
let data = []
function addData(id,Name,price,quantity){
    let datajson = {
        "ProductID":id,
        "ProductName":Name,
        "Price":price,
        "Quality":quantity
    }
    data.push(datajson)
    localStorage.setItem("Add to Cart",JSON.stringify(data))
}
function showdata(){
    console.clear();
    let stringdata= localStorage.getItem('Add to Cart')
    let parseData = JSON.parse(stringdata);
    console.log(parseData);
}