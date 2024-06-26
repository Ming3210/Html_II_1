class Employee1{
    name:string;
    protected company:string
    private phone:number
    constructor(name:string,company:string,phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(){
        console.log(this.name,this.company,this.phone);
    }
}

class ManagerNew extends Employee1{
    teamSize:number;
    constructor(name:string,company:string,phone:number,teamSize:number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
    printInfo(): void {
        super.printInfo()
        console.log(this.teamSize);
    }
}
let manager = new ManagerNew("Minh","bv",123123,4)
manager.printInfo()