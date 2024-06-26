function type(a:number | string):string{
    if(typeof a === 'number' || typeof a === "string") return typeof a;
    else return "khong phai kieu du lieu"
}
console.log(type(9));
let number:number[] = []
let number2 :Array<number> = []

function get(a:number | number[]|string[]):string|(number|string)[]{
    if(typeof a === 'number') {
       
        return [a]
    }
    else if(Array.isArray(a)) return [a[a.length - 1]]
    else return "KP kieu du lieu"
}


type generic1 = Array<number>
type generic2 = Array<string>
let generic3 =<T>(param:T)=>{
    return param
}
function get1<T>(a:T|T[]):[T]{
    if(Array.isArray(a)){
        return [a[a.length - 1]]
    }else {
        return [a]
    }
}

console.log(get1([3,4,"hhghghgg"]));
console.log(get1(6));
