"use strict";
class Vehicle {
    constructor(name, speed, id) {
        this.name = name;
        this.speed = speed;
        this.id = id;
    }
    slowDown(speed) {
        this.speed -= speed;
    }
    speedUp(speed) {
        this.speed += speed;
    }
    showSpeed() {
        console.log(this.speed);
    }
}
class Bicycle extends Vehicle {
    constructor(name, speed, id, gear) {
        super(name, speed, id);
        this.gear = gear;
    }
}
let mezcedes = new Bicycle("Mezcedes", 100, 10, 36);
mezcedes.showSpeed();
mezcedes.speedUp(50);
mezcedes.showSpeed();
mezcedes.slowDown(25);
mezcedes.showSpeed();
