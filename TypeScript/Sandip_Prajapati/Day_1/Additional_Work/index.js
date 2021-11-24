"use strict";
function getAllBooks() {
    let books = [{ title: "Ulsee", author: "James Joyse", available: true, category: Category.Biography },
        { title: "A farewell of arms", author: "Emmest Halingway", available: false, category: Category.Poetry },
        { title: "I know why caged birds sings", author: "Maya ANgelou", available: true, category: Category.Fiction },
        { title: "Moby Dick", author: "Herman Melvile", available: true, category: Category.History }];
    return books;
}
function logInAvailableFirst(books) {
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
var Category;
(function (Category) {
    Category[Category["Biography"] = 0] = "Biography";
    Category[Category["Poetry"] = 1] = "Poetry";
    Category[Category["Fiction"] = 2] = "Fiction";
    Category[Category["History"] = 3] = "History";
    Category[Category["Children"] = 4] = "Children";
})(Category || (Category = {}));
;
function getTitlesByCategory(categoryFilter) {
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
const poetryBooks = getTitlesByCategory(Category.Poetry);
logBookTitles(poetryBooks);
const allBooks = getAllBooks();
logInAvailableFirst(allBooks);
//# sourceMappingURL=index.js.map