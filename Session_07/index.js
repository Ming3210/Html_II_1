"use strict";
// array
let sts = ["minh", "5"];
let subst = [1, 2, 4, 5, 3];
let number = ["ưdasd", "ádadasd"];
//object
let cat = {
    name: "Minh",
    height: 121,
    color: "white"
};
//enum
var role;
(function (role) {
    role[role["ADMIN"] = 5] = "ADMIN";
    role[role["USER"] = 6] = "USER";
})(role || (role = {}));
let person = {
    name: "Minh",
    age: 19,
    role: 5
};
//void
function sayHello() {
    console.log("Hello");
    return;
}
console.log(sayHello());
function sum(a, b) {
    return a + b;
}
console.log(sum(5, "2"));
//unknown
function typeAny(userName) {
    if (typeof userName == "string") {
        console.log("2qweqweqe");
    }
    else
        console.log("zxczzxccxzczxczczxczxczx");
}
typeAny(5);
//never
function typeNever() {
}
typeNever();
