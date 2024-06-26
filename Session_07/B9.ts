let length1: number = 0
function checkPrime(arr: number[]): boolean {
    for(let i=0; i<arr.length; i++){
        let count : number = 0  
        for(let j = 1;j<=arr[i];j++){
            if(arr[i]%j==0){
                count++
            }
        }
        if(count==2){
            arr5.push(arr[i])
            length1++
        }
    }
    if(length1==arr.length) return true
    else return false
    
}
let arr5: number[] =[]
console.log(checkPrime([3,5,7,11,13]))
arr5=[]
console.log(checkPrime([1,3,4,2,7,9,32,43,12,45])
);


