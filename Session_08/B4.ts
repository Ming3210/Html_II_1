function multi(a: number|Array<number>):number|number[]{
    if(typeof a === 'number') return a**2
    else return a.map(x=>x**2)
}
console.log(multi([2,4,6]));
