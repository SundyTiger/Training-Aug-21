function getAllBooks() {
    let books = [{ title: "Ulsee", author: "James Joyse", available: true, category: Category.Biography },
    { title: "A farewell of arms", author: "Emmest Halingway", available: false, category: Category.Poetry },
    { title: "I know why caged birds sings", author: "Maya ANgelou", available: true, category: Category.Fiction },
    { title: "Moby Dick", author: "Herman Melvile", available: true, category: Category.History }]
    return books
}
function logInAvailableFirst(books: string | any[]): void {
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
enum Category { Biography, Poetry, Fiction, History, Children };
function getTitlesByCategory(categoryFilter: Category): Array<string> {
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
function logBookTitles(titles: string): void {
    for (let title of titles) {
        console.log(title)
    }

}
const poetryBooks:string[] = getTitlesByCategory(Category.Poetry)
logBookTitles(poetryBooks)
const allBooks = getAllBooks();
logInAvailableFirst(allBooks);