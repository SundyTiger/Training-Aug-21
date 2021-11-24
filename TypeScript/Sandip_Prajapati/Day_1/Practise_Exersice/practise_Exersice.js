"use strict";
//Basic Types
//Boolean
let isDone = false;
//Number
let decimal = 6;
let hex = 0xf00d;
let binary = 0b1010;
let octal = 0o744;
let big = 100n;
//String
let color = "blue";
color = 'red';
let fullName = `Bob Bobbington`;
let age = 37;
let sentence1 = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month.`;
let sentence2 = "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";
//Array
let list1 = [1, 2, 3];
let list2 = [1, 2, 3];
//Tuple
// Declare a tuple type
let x;
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substring(1));
// console.log(x[1].substring(1));
// x[3] = "world";
// console.log(x[5].toString());
//Enum
var Color1;
(function (Color1) {
    Color1[Color1["Red"] = 0] = "Red";
    Color1[Color1["Green"] = 1] = "Green";
    Color1[Color1["Blue"] = 2] = "Blue";
})(Color1 || (Color1 = {}));
let c1 = Color1.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 3] = "Blue";
})(Color2 || (Color2 = {}));
let c2 = Color2.Green;
var Color3;
(function (Color3) {
    Color3[Color3["Red"] = 1] = "Red";
    Color3[Color3["Green"] = 2] = "Green";
    Color3[Color3["Blue"] = 4] = "Blue";
})(Color3 || (Color3 = {}));
let c3 = Color3.Green;
var Color4;
(function (Color4) {
    Color4[Color4["Red"] = 1] = "Red";
    Color4[Color4["Green"] = 2] = "Green";
    Color4[Color4["Blue"] = 3] = "Blue";
})(Color4 || (Color4 = {}));
let colorName = Color4[2];
// Displays 'Green'
console.log(colorName);
//Unknown
// let notSure: unknown = 4;
// notSure = "maybe a string instead";
// // OK, definitely a boolean
// notSure = false;
// declare const maybe: unknown;
// // 'maybe' could be a string, object, boolean, undefined, or other types
// // const aNumber: number = maybe;
// if (maybe === true) {
//     // TypeScript knows that maybe is a boolean now
//     const aBoolean: boolean = maybe;
//     // So, it cannot be a string
//     //   const aString: string = maybe;
// }
// if (typeof maybe === "string") {
//     // TypeScript knows that maybe is a string
//     const aString: string = maybe;
//     // So, it cannot be a boolean
//     //   const aBoolean: boolean = maybe;
// }
//Any
// declare function getValue(key: string): any;
// // OK, return value of 'getValue' is not checked
// const str: string = getValue("myString");
//Void
function warnUser() {
    console.log("This is my warning message");
}
warnUser();
//# sourceMappingURL=practise_Exersice.js.map