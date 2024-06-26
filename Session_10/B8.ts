class Rectangle {
    private width: number;
    private height: number;
    constructor(width: number, height: number){
        this.width = width;
        this.height = height;
    }
    set width1(value: number){
        this.width = value;
    }
    set height1(value: number){
        this.height = value;
    }
    Rectangle0(value: number){
        value = this.width*2+this.height*2
    }
    Rectangle1(value: number):void{
        value =  this.width*this.height
    }
    Rectangle2(value: number):void{
        value =  Math.sqrt(this.width**2+this.height**2);
    }
}
let rectangle = new Rectangle(3,4)
console.log(rectangle);
console.log(rectangle.Rectangle0);
console.log(rectangle.Rectangle1);
rectangle.width1 = 6
rectangle.height1 = 9
console.log(rectangle);
console.log(rectangle.Rectangle0);
console.log(rectangle.Rectangle1);

