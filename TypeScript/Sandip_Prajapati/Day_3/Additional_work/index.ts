// /// <reference path="utility.ts" />
// import util =  Utility.Fees
// // let fee = Utility.Fees.calculateLateFees(10);
// let fee = util.calculateLateFees(10)

// console.log(`Fees: ${fee}`)
import { Book } from '../../Day_2/Additional_Work/interfaces'
import { Category } from '../../Day_2/Additional_Work/enum'
import { purge } from './generic'

let inventory: Array<Book> =
    [
        { id: 1, title: "Ulsee", author: "James Joyse", available: true, category: Category.Biography },
        { id: 2, title: "A farewell of arms", author: "Emmest Halingway", available: false, category: Category.Poetry },
        { id: 3, title: "I know why caged birds sings", author: "Maya ANgelou", available: true, category: Category.Fiction },
        { id: 4, title: "Moby Dick", author: "Herman Melvile", available: true, category: Category.Poetry }
    ]

let purgeBook: Array<Book> = purge<Book>(inventory);
purgeBook.forEach(book => console.log(book.title))
let purgeNumbers:Array<number> = purge<number>([1,2,3,4,5,6,7,8,9])
console.log(purgeNumbers)