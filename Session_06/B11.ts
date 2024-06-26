function calcu(a:number | string,b:number | string,c:string){
    if(typeof a === "number" && typeof b === "number" && c=="add"){
        return a + b;
    }
    else if(typeof a === "number" && typeof b === "number" && c==="subtract"){
        return a - b;
    }
    else if(typeof a === "number" && typeof b === "number" && c==="multiply"){
        return a * b;
    }
    else if(typeof a === "number" && typeof b === "number" && c==="divide"){
        return a / b;
    }
    else if(typeof a === "number" && typeof b === "number" && c==="mulMul"){
        return a ** b;
    }
    else if(typeof a === "number" && typeof b === "number" && c==="danger"){
        let sum = 0
        for(let i = 0; i < b; i++){
            sum *=i 
        }
        sum = sum*a
    }
    else if(typeof a === "string" || typeof b === "string"){
        return "Tham số ko hợp lệ"
    }

}

function add() {
    let number1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    let number2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
    let operation: string = "add";
    let result = calcu(number1, number2, operation);
    console.log(result);
   
}
function sub() {
    let number1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    let number2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
    let operation: string = "subtract";
    let result = calcu(number1, number2, operation);
    console.log(result);
   
}
function mul() {
    let number1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    let number2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
    let operation: string = "multiply";
    let result = calcu(number1, number2, operation);
    console.log(result);
   
}
function de() {
    let number1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    let number2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
    let operation: string = "divide";
    let result = calcu(number1, number2, operation);
    console.log(result);
}

function mulMul(){
    let number1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    let number2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
    let operation: string = "mulMul";
    let result = calcu(number1, number2, operation);
    console.log(result);
}
function danger(){
    let number1 = parseFloat((<HTMLInputElement>document.getElementById("num1")).value);
    let number2 = parseFloat((<HTMLInputElement>document.getElementById("num2")).value);
    let operation: string = "danger";
    let result = calcu(number1, number2, operation);
    console.log(result);
}