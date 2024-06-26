class Person{
    name:string
    constructor(name:string){
        this.name = name;
    }
    displayInfo():void{
        console.log(this.name);
    }
}

class sts extends Person{
    id:number
    constructor(name:string,id:number){
        super(name);
        this.id = id;
    }
    displayInfo(): void {
        super.displayInfo();
        console.log(this.id);
    }
}

let sts1 = new sts("Minh",123456789);
sts1.displayInfo()