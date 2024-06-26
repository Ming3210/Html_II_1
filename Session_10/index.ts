 /*
 Gồm 4 tính chất
 1. Tính đóng gói : encapsulation
  Nhằm giúp cho các truy cập đối tượng đc bảo mật hơn 
 2. Tính trìu tượng : abstraction
 3. Tính kế thừa : subclass
 4. Tính đa hình : polymorphism
 */

 class Person{
    name1:string
    private age1:number
    fName:string
    lastName:string
    private address:string
    
    constructor(name:string, age:number,fName:string,lastName:string,address:string) {
         this.name1 = name;
        this.age1 = age;
        this.fName = fName;
        this.lastName = lastName;
        this.address = address;
    }
    //Khai báo 1 phương thúc show thông tin của user
    showInfo(){
        console.log("Xin chào",this.fName+" "+this.lastName);
        
    }
    showName():void{
        console.log("xin chào",this.name1);
        
    }
    getAge():number{
        return this.age1;
        
    }
    set address1(address1:string){
        this.address = address1;
    }
    set age2(age2:number){
        this.age1 = age2;
    }
 }

 let sts1 = new Person("John",22,"Minh","Thu","HN")
// sts1 đc gọi là instance của class Person 
//Cách để gọi phương thức ra
 sts1.showInfo()
//Assess Modifier : Phạm vi truy cập

/*
1. Public
2. Private
3. Protected
Khi class con kế thừa class cha thì class con sẽ có các thuộc tính và phương thức của class cha
Khi phạm vi truy cập là protected thì class con ko truy cập đc class cha
*/
sts1.name1 = "Ez"

console.log(sts1.getAge());
sts1.age2 = 99;
console.log(sts1.getAge());
sts1.showName()
sts1.address1 = "Saigon"
console.log(sts1.address1);
//Khi ko đưa phạm vi truy cập thì mặc định phạm vi là public
//Trong trường hợp phạm vi là private thì khi lấy ra phải là get còn muốn thay đổi giá trị là set 

