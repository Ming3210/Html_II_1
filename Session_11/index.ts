class Parent{
    userName:string
    password:string
    constructor(userName:string,password:string){
        this.userName = userName;
        this.password = password;
    }
    sayHello():void{
        console.log(`hello:${this.userName}`);
        
    }
}

class Child extends Parent{
    address:string
    constructor(a:string,b:string,address:string){
        super(a,b);
        this.userName = a;
        this.password = b;
        this.address = address;
    }
    sayGoodbye(){
        console.log("Tam biet");
        
    }
}
let child1 = new Child("asdas","asdsa","sdsdsds")
child1.sayHello()

class childChild extends Child{
    constructor(userName:string,password:string,address:string){
        super(userName,password,address);
        this.userName = userName;
        this.password = password;
        this.address = address;
    }
}

let child11 = new childChild("hong","111","Hn")
child11.sayHello()
child11.sayGoodbye()
console.log(Parent);

