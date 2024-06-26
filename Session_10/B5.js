"use strict";
class Department {
    constructor(id, name, employee) {
        this.id = id;
        this.name = name;
        this.employee = employee;
    }
    describe() {
        console.log(this.id, this.name);
    }
}
let depart1 = new Department(1, "Department", ["Department", "Department", "Department", "Department", "Department"]);
depart1.describe();
