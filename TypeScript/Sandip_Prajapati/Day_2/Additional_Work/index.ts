import { Category } from './enum';
import { Book } from './interfaces';
function getAllBooks(): Book[] {
    let books = [{ id: 1, title: "Ulsee", author: "James Joyse", available: true, category: Category.Biography },
    { id: 2, title: "A farewell of arms", author: "Emmest Halingway", available: false, category: Category.Poetry },
    { id: 3, title: "I know why caged birds sings", author: "Maya ANgelou", available: true, category: Category.Fiction },
    { id: 4, title: "Moby Dick", author: "Herman Melvile", available: true, category: Category.Poetry }]
    return books
}
function logInAvailableFirst(books: string | any[] = getAllBooks()): void {
    let numberOfBooks: number = books.length;
    let firstAvailable: string = "";
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
function getTitlesByCategory(categoryFilter: Category = Category.Fiction): Array<string> {
    console.log("Getting Book By Category: " + categoryFilter);
    const allBooks = getAllBooks();
    const filteredTitle: string[] = [];
    for (let currentBooks of allBooks) {
        if (currentBooks.category === categoryFilter) {
            filteredTitle.push(currentBooks.title);
        }
    }
    return filteredTitle
}
function logBookTitles(titles: string[]): void {
    for (let title of titles) {
        console.log(title)
    }

}
//***********************************************************************************************/
function getBookById(id: number): Book {
    const allBooks = getAllBooks();
    return allBooks.filter(book => book.id === id)[0]

}
function createCustomerId(name: string, id: number): string {
    return name + " " + id
}
// let myID: string = createCustomerId('Sundy', 2)
let x1: number;
x1 = 5
function createCustomer(name: string, age?: number, city?: string): void {
    console.log("Create Customer: " + name)
    if (age) { console.log("Age: " + age) }
    if (city) { console.log("City: " + city) }
}
function checkOutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log("Checking for the Book for :" + customer);
    let booksCheckOut: string[] = [];
    for (let id of bookIDs) {
        let book = getBookById(id);
        if (book.available) {
            booksCheckOut.push(book.title)
        }
    }
    return booksCheckOut
}
function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(bookProperty: any): string[] {
    const allBooks = getAllBooks();
    const foundTitles: string[] = [];
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
function printBook(book: Book): void {
    console.log(book.title + ' by ' + book.author)

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
let myBook:Book = {
    id: 5,
    title: "Pride and Prejudise",
    author: "Jane Austen",
    available: true,
    category: Category.Fiction,
    pages:250,
    markDamaged:(reason:string)=>console.log('Damaged: '+reason)
}
printBook(myBook)
myBook.markDamaged('missing Back cover')
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