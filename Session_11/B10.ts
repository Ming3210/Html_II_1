class Shape1 {
    calculateArea(): number {
        return 0;
    }
}

class Rectangle1 extends Shape1 {
    private width: number;
    private height: number;

    constructor(width: number, height: number) {
        super();
        this.width = width;
        this.height = height;
    }

    calculateArea(): number {
        return (this.width + this.height)*2;
    }
}

class Circle1 extends Shape1 {
    private radius: number;

    constructor(radius: number) {
        super();
        this.radius = radius;
    }

    calculateArea(): number {
        return Math.PI * this.radius;
    }
}

let rectangle11 = new Rectangle1(3, 4);
let circle11 = new Circle1(3);

console.log(rectangle1.calculateArea());
console.log(circle1.calculateArea());