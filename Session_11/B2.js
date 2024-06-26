"use strict";
class Employee1 {
    constructor(name, company, phone) {
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo() {
        console.log(this.name, this.company, this.phone);
    }
}
class ManagerNew extends Employee1 {
    constructor(name, company, phone, teamSize) {
        super(name, company, phone);
        this.teamSize = teamSize;
    }
    printInfo() {
        super.printInfo();
        console.log(this.teamSize);
    }
}
let manager = new ManagerNew("Minh", "bv", 123123, 4);
manager.printInfo();
