//Basic Types
//Boolean
let isDone: boolean = false;

//Number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
let big: bigint = 100n;

//String
let color: string = "blue";
color = 'red';
let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence1: string = `Hello, my name is ${fullName}.
 
I'll be ${age + 1} years old next month.`;
let sentence2: string =
    "Hello, my name is " +
    fullName +
    ".\n\n" +
    "I'll be " +
    (age + 1) +
    " years old next month.";

//Array
let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

//Tuple
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
// x = [10, "hello"]; // Error
console.log(x[0].substring(1));

// console.log(x[1].substring(1));
// x[3] = "world";
// console.log(x[5].toString());

//Enum
enum Color1 {
    Red,
    Green,
    Blue,
}
let c1: Color1 = Color1.Green;

enum Color2 {
    Red = 1,
    Green,
    Blue,
}
let c2: Color2 = Color2.Green;

enum Color3 {
    Red = 1,
    Green = 2,
    Blue = 4,
}
let c3: Color3 = Color3.Green;

enum Color4 {
    Red = 1,
    Green,
    Blue
}
let colorName: string = Color4[2];

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
function warnUser(): void {
    console.log("This is my warning message");
}
warnUser()
