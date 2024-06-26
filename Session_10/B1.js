"use strict";
class Vehicle {
    constructor(name, year, company) {
        this.name = name;
        this.year = year;
        this.company = company;
    }
    printVehicle() {
        console.log(this.name);
        console.log(this.year);
        console.log(this.company);
    }
}
let vehicle1 = new Vehicle("Mezcedes", 2000, "Mezcedes 1");
let vehicle2 = new Vehicle("Audi", 2000, "Audi 1");
vehicle1.printVehicle();
vehicle2.printVehicle();
