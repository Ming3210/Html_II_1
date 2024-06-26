"use strict";
class Circle {
    constructor(radius) {
        this.radius = radius;
    }
    set radiusS(value) {
        this.radius = value;
    }
    r() {
        return this.radius;
    }
    S() {
        return Math.PI * this.radius ** 2;
    }
    P() {
        return Math.PI * this.radius;
    }
}
let cirle1 = new Circle(3);
console.log(cirle1.r);
console.log(cirle1.S);
console.log(cirle1.P);
