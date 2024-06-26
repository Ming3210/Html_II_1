class Employee{
    name:string;
    company:string;
    phone:number;
    constructor(name:string,company:string,phone:number){
        this.name = name;
        this.company = company;
        this.phone = phone;
    }
    printInfo(){
        console.log(this.name,this.company,this.phone);
        
    }
}

let employee1 = new Employee("Minh","Sherlock",123456789);