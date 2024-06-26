class Employee{
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
class Manager extends Employee{
    teamSize:number;
    constructor(name:string,company:string,phone:number,teamSize:number){
        super(name,company,phone);
        this.teamSize = teamSize;
    }
    
}