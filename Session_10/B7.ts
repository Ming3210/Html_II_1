class Circle{
    private radius: number
    constructor(radius: number){
        this.radius = radius
    }
    set radiusS(value: number){
        this.radius = value
    }
    r(){
        return this.radius
    }
    S(){
        return Math.PI * this.radius**2
    }
    P(){
        return Math.PI * this.radius
    }
}
let cirle1 = new Circle(3)
console.log(cirle1.r);
console.log(cirle1.S);
console.log(cirle1.P);
