"use strict";
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    set width1(value) {
        this.width = value;
    }
    set height1(value) {
        this.height = value;
    }
    Rectangle0(value) {
        value = this.width * 2 + this.height * 2;
    }
    Rectangle1(value) {
        value = this.width * this.height;
    }
    Rectangle2(value) {
        value = Math.sqrt(this.width ** 2 + this.height ** 2);
    }
}
let rectangle = new Rectangle(3, 4);
console.log(rectangle);
console.log(rectangle.Rectangle0);
console.log(rectangle.Rectangle1);
rectangle.width1 = 6;
rectangle.height1 = 9;
console.log(rectangle);
console.log(rectangle.Rectangle0);
console.log(rectangle.Rectangle1);
