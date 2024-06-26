function checkType(a:unknown):string{
    if(Array.isArray(a)==false ){
        return "object"
    }
    else if(typeof a === "number"){
        return "number"
    }else if(Array.isArray(a)==true){
        return "array"
    }else return "Invalid type"
  
  
}
let xyz:{x:number,y:number} = {
    x:10,
    y:20
}
console.log(checkType(xyz));
