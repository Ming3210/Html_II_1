// array
let sts:string[] = ["minh","5"]
let subst:number[] = [1,2,4,5,3]
let number:Array<string> = ["ưdasd","ádadasd"]

//object
let cat: {name:string,height:number,color:string} = {
    name: "Minh",
    height:121,
    color:"white"
}

//enum

enum role {
    ADMIN = 5,
    USER,
}
let person:{name:string,age:number,role:role.ADMIN} = {
    name: "Minh",
    age: 19,
    role: 5
}

//void
function sayHello():void {
    console.log("Hello");
    return
}
console.log(sayHello());
function sum(a:number,b:string):string {
    return a + b
}

console.log(sum(5,"2"));

//unknown
function typeAny(userName:unknown):void{
    if(typeof userName == "string"){
        console.log("2qweqweqe");
        
    }else console.log("zxczzxccxzczxczczxczxczx");
    
}
typeAny(5)

//never
function typeNever(){
  
}
typeNever()