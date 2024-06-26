function reverse<T>(a:Array<T>):T[] {
   return a.reverse();
}
console.log(reverse([1,2,3,4,5,6]));
console.log(reverse(["Hoa","Hong","Nhung",1]));

function test<T,U>(para1:T,para2:U):[T,U]{
    return [para1,para2];
}

console.log(test(5,6));
console.log(test("Hoa",5));

function add(a:number,b?:number):number{
    return b?a + b:a
}
console.log(add(3));
console.log(add(3,9));

// interface
type A={
    name:string,
    
}

interface A1{
    name:string,
}
interface A2 extends A1{
    age:17
}
type B={
    age:number,
}
let obj1:A ={
    name: "Minh"
}
let obj2:A1 = {
    name: "Minh"
}
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

class Person implements A1{
    name:string;
    constructor(name:string){
        this.name = name;
    }
}
function demo<T extends {firstName:string, lastName:string}>(param:T ){
    return {...param,fullName: param.firstName + param.lastName}
}
let result = demo({firstName: "Van", lastName: "Minh"})
console.log(result);

