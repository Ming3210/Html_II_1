"use strict";
class Parent {
    constructor(userName, password) {
        this.userName = userName;
        this.password = password;
    }
    sayHello() {
        console.log(`hello:${this.userName}`);
    }
}
class Child extends Parent {
    constructor(a, b, address) {
        super(a, b);
        this.userName = a;
        this.password = b;
        this.address = address;
    }
    sayGoodbye() {
        console.log("Tam biet");
    }
}
let child1 = new Child("asdas", "asdsa", "sdsdsds");
child1.sayHello();
class childChild extends Child {
    constructor(userName, password, address) {
        super(userName, password, address);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
}
let child11 = new childChild("hong", "111", "Hn");
child11.sayHello();
child11.sayGoodbye();
console.log(Parent);
