class Student{
    id:number
    age:number
    email:string
    constructor(id:number,age:number,email:string){
        this.id = id
        this.age = age
        this.email = email
    }
    print(){
        console.log(this.id,this.age,this.email);
    }
}
let sts01 = new Student(1,19,"a@gmail.com",)
let sts02 = new Student(2,20,"b@gmail.com",)

let stsArr = [sts01, sts02]
for(let i=0; i<stsArr.length;i++){
    stsArr[i].print()
}
