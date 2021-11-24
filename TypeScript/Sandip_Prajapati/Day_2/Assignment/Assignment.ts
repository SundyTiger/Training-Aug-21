import {Products,ProductsInfo,Items} from './interface'
let products:Products[] = [{ id: 1, productName: "Himalayaa", quantity: 30 }, { id: 2, productName: "Rolex", quantity: 25 }, { id: 3, productName: "Mac", quantity: 10 }]
console.log("Before Class Run Products: "+products)
class ProductInfo implements ProductInfo {
    addItem(id:number, add:number) {
        let product = products.find((p) => {
            if (p.id === id) {
                p.quantity = p.quantity + add
            }
            if (p.quantity < 5) {
                console.log("Item is less. Please request for more Items!!")
            }
        }
        )
        console.log(product)


    }
    sellItem(id: number, sell: number) {
        let product = products.filter((p) => {
            if (p.id === id) {
                p.quantity = p.quantity - sell
            }
            if (p.quantity < 5) {
                console.log("Item is less. Please request for Items!!")
            }
        })
        console.log(product)

    }
    checkItem(id:number){
        let product = products.filter((p) => {
            if (p.quantity < 5) {
                console.log("Item is less. Please request for Items!!")
            }
        })
    }

}
let productinfo:ProductsInfo = new ProductInfo();
// productinfo.addItem(1, 5)
productinfo.sellItem(2, 21)

console.log("After Class Run Products: "+products)