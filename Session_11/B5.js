"use strict";
class Test {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    printInfo() {
        console.log(this.id, this.name);
    }
}
class childTest extends Test {
    constructor(id, name) {
        super(id, name);
    }
    displayInfo() {
        console.log(this.name); // protected có thể truy cập đc từ class con và class cha, còn truy cập từ bên ngoài thì ko đc
        // console.log(this.id); => private thì chỉ có thể truy cập với class cha , truy cập từ bên ngoài thì ko đc
    }
}
let test1 = new childTest(123456789, "Minh");
test1.displayInfo();
let test12 = new Test(1, "Minh");
test12.printInfo();
