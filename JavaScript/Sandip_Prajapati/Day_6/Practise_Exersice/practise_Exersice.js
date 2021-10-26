function jsondata() {
    //Keep above JSON Data into a file, using Web Fetch API read that data.
    fetch('http://127.0.0.1:5501/Day_6/data.json')
        .then(res => res.json())
        .then(data => {
            //Store following JSON data into localstorage,read that data and print it into console.
            let datastore = data.products;
            for (x in datastore) {
                stringData(x, datastore[x]);
                jsonparse(x)
            }
        })
        .catch(err => console.log(err));
}
function stringData(key, data) {
    var storedata = JSON.stringify(data);
    localStorage.setItem(key, storedata)
}
function jsonparse(key) {
    var data = localStorage.getItem(x);
    let parsedata = JSON.parse(data)
    console.log(parsedata)
}