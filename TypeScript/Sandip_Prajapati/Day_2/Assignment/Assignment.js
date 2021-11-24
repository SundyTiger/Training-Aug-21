"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let products = [{ id: 1, productName: "Himalayaa", quantity: 30 }, { id: 2, productName: "Rolex", quantity: 25 }, { id: 3, productName: "Mac", quantity: 10 }];
class ProductInfo {
    addItem(id, add) {
        let product = products.find((p) => {
            if (p.id === id) {
                p.quantity = p.quantity + add;
            }
            if (p.quantity < 5) {
                console.log("Item is less. Please request for more Items!!");
            }
        });
        console.log(product);
    }
    sellItem(id, sell) {
        let product = products.filter((p) => {
            if (p.id === id) {
                p.quantity = p.quantity - sell;
            }
            if (p.quantity < 5) {
                console.log("Item is less. Please request for Items!!");
            }
        });
        console.log(product);
    }
    checkItem(id) {
        let product = products.filter((p) => {
            if (p.quantity < 5) {
                console.log("Item is less. Please request for Items!!");
            }
        });
    }
}
let productinfo = new ProductInfo();
// productinfo.addItem(1, 5)
productinfo.sellItem(2, 21);
console.log(products);
//# sourceMappingURL=Assignment.js.map