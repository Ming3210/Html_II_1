/*
    Dùng để bổ sung, thay đổi thuộc tính cho đối tượng
    Cú pháp : @
*/

//function decorator dể thêm thuộc tính
function decoratorProperty<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      address = "Hà Nội";
      sayHello = ()=>{
        console.log("Hello!");
      }
    };
  }
  @decoratorProperty
class Student{
    userName:string;
    constructor(userName:string){
        this.userName = userName;
    }

}

let sts1 = new Student("Minh")
// Thêm thuộc tính age cho đối tượng sts1 ===> Dùng decorator

console.log(sts1);
function sum(){
    return function(a:number,b:number):number{
        return a + b;
    }
}

console.log(sum()(1,2));

function closure(){
    let a = 5
    function test1(){
        console.log(a);
    }
    test1()
}
closure()
