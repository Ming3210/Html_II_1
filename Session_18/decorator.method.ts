/*
Trang trí cho phương thức
Phương thức và hàm khác nhau như nào
Hàm là function tự định nghĩa
Phương thức dùng trong đối tượng hoặc lớp
map, filter, forEach, là hàm hay phương thức
==> Để dùng decorator cho function thì p dùng @ đặt trc tên hàm hay phương thức
*/

// console.log(window);
// Tạo function decor cho function sum trong class Test
function decorMethod(target: any, propertyKey: string, descriptor: PropertyDescriptor){
    // console.log("11111111",target);
    // console.log("222222",propertyKey);
    // console.log("3333333",descriptor);
    // trong descrpitor có chứa 1 đối tượng có chứa thuộc tính value
    // Nhờ cái value thì mói đi decor cho method đc
    descriptor.value = function(a:number, b:number): number {
        return (a+b)*12
    }
    

}
class Test{
    //Viết phương thức cho class Test
    //tạo function tính tổng
    @decorMethod
    sum(a: number,b: number){
        return a + b;
    }
    @decorMethod
    sum2(a: number,b: number){
        return (a + b)*4;
    }
}

let sum1 = new Test
console.log(sum1.sum2(1,4));
