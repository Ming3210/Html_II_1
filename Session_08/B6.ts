function printString(a:string|string[]):string|string[] |undefined {
    if(typeof a === 'string'){
        return a        
    }else{
        return a
    }
}

console.log(printString(["qưewq",'qưeqwewq',`eqweqwqwqe`]));
