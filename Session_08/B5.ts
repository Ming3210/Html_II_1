//Union Types cho phép biến chứa một trong các kiểu dữ liệu được chỉ định.
let inp: string | number;
inp = 10
inp = 'Hello'

//Intersection Types cho phép kết hợp nhiều kiểu dữ liệu thành một kiểu mới.
//Được đặt bằng cách sử dụng dấu nối & giữa các kiểu dữ liệu.

interface A {
    prop1: number;
}

interface B {
    prop2: string;
}

let objectAB: A & B;
objectAB = { 
        prop1: 10, prop2: 'Hello' 
    };