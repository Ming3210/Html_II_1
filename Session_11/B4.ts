class Vehicle{
    name:string;
    speed:number;
    id:number
    constructor(name:string, speed:number,id:number){
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speed:number):void{
        this.speed -= speed;
    }
    speedUp(speed:number):void{
        this.speed += speed;
    }
    showSpeed():void{
        console.log(this.speed);
        
    }
}

class Bicycle extends Vehicle{
    private gear:number
    constructor(name:string, speed:number,id:number,gear:number){
        super(name, speed,id);
        this.gear = gear;
    }
}

let mezcedes = new Bicycle("Mezcedes",100,10,36)
mezcedes.showSpeed()
mezcedes.speedUp(50)
mezcedes.showSpeed()
mezcedes.slowDown(25)
mezcedes.showSpeed()