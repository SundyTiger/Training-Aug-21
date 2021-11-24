"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enum_1 = require("./enum");
function getAllBooks() {
    let books = [{ id: 1, title: "Ulsee", author: "James Joyse", available: true, category: enum_1.Category.Biography },
        { id: 2, title: "A farewell of arms", author: "Emmest Halingway", available: false, category: enum_1.Category.Poetry },
        { id: 3, title: "I know why caged birds sings", author: "Maya ANgelou", available: true, category: enum_1.Category.Fiction },
        { id: 4, title: "Moby Dick", author: "Herman Melvile", available: true, category: enum_1.Category.Poetry }];
    return books;
}
function logInAvailableFirst(books = getAllBooks()) {
    let numberOfBooks = books.length;
    let firstAvailable = "";
    for (let currentBooks of books) {
        if (currentBooks.available) {
            firstAvailable = currentBooks.title;
            break;
        }
    }
    console.log("Number of Books: " + numberOfBooks);
    console.log("First Book Available: " + firstAvailable);
}
// enum Category { Biography, Poetry, Fiction, History, Children };
function getTitlesByCategory(categoryFilter = enum_1.Category.Fiction) {
    console.log("Getting Book By Category: " + categoryFilter);
    const allBooks = getAllBooks();
    const filteredTitle = [];
    for (let currentBooks of allBooks) {
        if (currentBooks.category === categoryFilter) {
            filteredTitle.push(currentBooks.title);
        }
    }
    return filteredTitle;
}
function logBookTitles(titles) {
    for (let title of titles) {
        console.log(title);
    }
}
//***********************************************************************************************/
function getBookById(id) {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0];
}
function createCustomerId(name, id) {
    return name + " " + id;
}
// let myID: string = createCustomerId('Sundy', 2)
let x1;
x1 = 5;
function createCustomer(name, age, city) {
    console.log("Create Customer: " + name);
    if (age) {
        console.log("Age: " + age);
    }
    if (city) {
        console.log("City: " + city);
    }
}
function checkOutBooks(customer, ...bookIDs) {
    console.log("Checking for the Book for :" + customer);
    let booksCheckOut = [];
    for (let id of bookIDs) {
        let book = getBookById(id);
        if (book.available) {
            booksCheckOut.push(book.title);
        }
    }
    return booksCheckOut;
}
function getTitles(bookProperty) {
    const allBooks = getAllBooks();
    const foundTitles = [];
    if (typeof (bookProperty) === 'string') {
        for (let book of allBooks) {
            if (book.author === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    else if (typeof (bookProperty) === 'boolean') {
        for (let book of allBooks) {
            if (book.available === bookProperty) {
                foundTitles.push(book.title);
            }
        }
    }
    return foundTitles;
}
function printBook(book) {
    console.log(book.title + ' by ' + book.author);
}
// let myBook = {
//     id: 5,
//     title: "Pride and Prejudise",
//     author: "Jane Austen",
//     available: true,
//     category: Category.Fiction,
//     year: '1813',
//     copies: 3
// }
let myBook = {
    id: 5,
    title: "Pride and Prejudise",
    author: "Jane Austen",
    available: true,
    category: enum_1.Category.Fiction,
    pages: 250,
    markDamaged: (reason) => console.log('Damaged: ' + reason)
};
printBook(myBook);
myBook.markDamaged('missing Back cover');
// let hermanBooks= getTitles("Herman Melvile")
// let hermanBooks= getTitles(true)
// console.log(hermanBooks)
// let myBooks:string[] = checkOutBooks("Thorne",1,3,2)
// myBooks.forEach(title => console.log(title))
// createCustomer("Sandip")
// createCustomer("Sandip",18)
// logInAvailableFirst()
// createCustomer("Sandip", 18, "Himatnagarf")
// let idGenerator: (name: string, id: number) => string;
// idGenerator = createCustomerId
// let myID: string = idGenerator('Sundy', 2)
// console.log(myID)
// getTitlesByCategory()
// console.log(getBookById(1))
// const poetryBooks: string[] = getTitlesByCategory(Category.Poetry);
// poetryBooks.forEach((val, idx, arr) => { console.log(++idx + " - " + val) })
//# sourceMappingURL=index.js.map