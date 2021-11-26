"use strict";
// /// <reference path="utility.ts" />
// import util =  Utility.Fees
// // let fee = Utility.Fees.calculateLateFees(10);
// let fee = util.calculateLateFees(10)
Object.defineProperty(exports, "__esModule", { value: true });
var enum_1 = require("../../Day_2/Additional_Work/enum");
var generic_1 = require("./generic");
var inventory = [
    { id: 1, title: "Ulsee", author: "James Joyse", available: true, category: enum_1.Category.Biography },
    { id: 2, title: "A farewell of arms", author: "Emmest Halingway", available: false, category: enum_1.Category.Poetry },
    { id: 3, title: "I know why caged birds sings", author: "Maya ANgelou", available: true, category: enum_1.Category.Fiction },
    { id: 4, title: "Moby Dick", author: "Herman Melvile", available: true, category: enum_1.Category.Poetry }
];
var purgeBook = (0, generic_1.purge)(inventory);
purgeBook.forEach(function (book) { return console.log(book.title); });
var purgeNumbers = (0, generic_1.purge)([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(purgeNumbers);
