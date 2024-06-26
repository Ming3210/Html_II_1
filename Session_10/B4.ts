class Vehicle2{
    name:string;
    protected year:number;
    private company:string;
    readonly id:number
    constructor(name:string,year:number,company:string,id:number){
        this.name = name;
        this.year = year;
        this.company = company;
        this.id = id;
    }
    printVehicle(){
        console.log(this.name);
        console.log(this.year);
        console.log(this.company);    
        console.log(this.id);
        
    }
}
let vehicle21 = new Vehicle2("nbn",2000,"NeverLetUdown",123)
let vehicle212 = new Vehicle2("nbn1212121",20001,"NeverLetUdown",123)
vehicle21.printVehicle()
vehicle212.printVehicle()