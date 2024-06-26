"use strict";
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getDescription() {
        console.log(this.name, this.price);
    }
}
class Electronics extends Product {
    constructor(brand, name, price) {
        super(name, price);
        this.brand = brand;
    }
    log() {
        console.log(this.brand, this.price, this.name);
    }
}
let electro = new Electronics("Visual", "Studio", 123);
electro.log();
