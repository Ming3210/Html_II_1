class Product {
    protected name: string;
    protected price: number;
    constructor(name: string, price: number) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(this.name, this.price);
        
    }
}
class Electronics extends Product {
    private brand: string;
    constructor(brand: string,name: string,price: number) {
        super(name, price);
        this.brand = brand;
    }
    log(){
        console.log(this.brand, this.price, this.name);
    }    
}
let electro = new Electronics("Visual","Studio",123)
electro.log()