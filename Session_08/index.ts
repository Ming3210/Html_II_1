
// Kiểm tra kiểu dữ liệu dùng typeof
//Phân biệt array vs object
// Ko thể dùng typeof đc vì cả 2 đều ra kiểu dữ liệu là object
// let a :number[]=[1,2,3,4,5,5]
// console.log(typeof a);
// console.log(Array.isArray(a));
console.log(5|7);
let text1: string|number = "hello"
text1 = 5
//Viết funtion tính tổng a và b , trả về kết quả

function sum(a:number|string,b:number|string): unknown {
    if(typeof a === "number" && typeof b === "number"){
        return a + b;
    }
}
console.log(sum(5,7));


let arr1:(number|string)[]= [5,"hoa"]
let arr2:[number,string] = [5,"lan"]
arr2.push(6)
console.log(arr2);

// alias
type Agent007 = string|number|null|undefined
let test1:Agent007 = ""
