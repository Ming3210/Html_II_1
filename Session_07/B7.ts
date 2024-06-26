function student(name:string,clasS:string){
    let objSts:{id:number,name:string,class:string} = {
        id:Math.floor(Math.random()*99999999999999999999),
        name:name,
        class:clasS
    }
    arr.push(objSts)
}
let arr:Array<object> = [];

student("Minh","K23HNPTITC")
student("Quý","K23HNPTITS")
student("Phuc","K23HNPTITC")
console.log(arr);
