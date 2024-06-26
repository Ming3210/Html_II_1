"use strict";
function reverse(a) {
    return a.reverse();
}
console.log(reverse([1, 2, 3, 4, 5, 6]));
console.log(reverse(["Hoa", "Hong", "Nhung", 1]));
function test(para1, para2) {
    return [para1, para2];
}
console.log(test(5, 6));
console.log(test("Hoa", 5));
function add(a, b) {
    return b ? a + b : a;
}
console.log(add(3));
console.log(add(3, 9));
let obj1 = {
    name: "Minh"
};
let obj2 = {
    name: "Minh"
};
// let obj3:A1|A2 = {
// }
/*
Type dùng đc intersection và union
Type ko thể kế thừa
Type ko thể implement bởi class
Thường khai báo kiểu dữ liệu


Interface có thể kế thừa interface khác
Có thể dùng implement
Thường khai báo các thuộc tính và phương thức

*/
class Person {
    constructor(name) {
        this.name = name;
    }
}
function demo(param) {
    return Object.assign(Object.assign({}, param), { fullName: param.firstName + param.lastName });
}
let result = demo({ firstName: "Van", lastName: "Minh" });
console.log(result);
