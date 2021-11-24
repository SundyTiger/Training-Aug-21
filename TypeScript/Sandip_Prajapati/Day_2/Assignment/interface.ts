interface Products {
    id: number, productName: string, quantity: number
}
interface ProductsInfo {
    addItem:Items;
    sellItem:Items;
    checkItem:(id:number)=>void
}
interface Items{
    (id:number,add:number):void;
}
export { Products,ProductsInfo,Items }