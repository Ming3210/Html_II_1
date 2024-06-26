"use strict";
class Shape {
    calculateArea() {
        return 0;
    }
}
class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return this.width * this.height;
    }
}
class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
let rectangle1 = new Rectangle(3, 4);
let circle1 = new Circle(3);
console.log(rectangle1.calculateArea());
console.log(circle1.calculateArea());
