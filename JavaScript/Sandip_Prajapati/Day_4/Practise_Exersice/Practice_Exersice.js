//Define a function called callback which receives an argument and prints the square of that number.
squarenum = callback => {
    num = document.getElementById('num').value;
    callback(num ** 2)
}

//Explain difference between var and let keyword using example.
var varnum = 10
let letnum = 10
console.log('I am Fresh Var: ', varnum)
console.log('I am Fresh Let: ', letnum)
//var Example
if (true) {
    var varnum = 45;
    let letnum = 45;
}
console.log('I am after If Var: ', varnum)
console.log('I am after If Let: ', letnum)

/*
Make a function that takes in a single parameter and returns a new promise. 
using setTimeout, after 500 milliseconds, the promise will either resolove or reject. 
if the input is a string, the promise resolves with that reverse string .
if the input is anything but a string it rejects with that same input call the function wrong Input
 */

function print(some) {
    document.getElementById('str').innerHTML = some;
}
var promise = value => {
    return new Promise(function (res, rej) {
        var para = '';
        for (i = value.length - 1; i >= 0; i--) {
            para += value[i];
        }
        if (typeof (value) === 'string') {
            setTimeout(function () { res(para) }, 500);
        }
        else {
            setTimeout(function () { rej('Wrong Input') }, 500);
        }
    })
}
promise('green').then(res => print(res)).catch(rej => print(rej))