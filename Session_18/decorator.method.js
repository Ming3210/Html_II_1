"use strict";
/*
Trang trí cho phương thức
Phương thức và hàm khác nhau như nào
Hàm là function tự định nghĩa
Phương thức dùng trong đối tượng hoặc lớp
map, filter, forEach, là hàm hay phương thức
==> Để dùng decorator cho function thì p dùng @ đặt trc tên hàm hay phương thức
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// console.log(window);
// Tạo function decor cho function sum trong class Test
function decorMethod(target, propertyKey, descriptor) {
    // console.log("11111111",target);
    // console.log("222222",propertyKey);
    // console.log("3333333",descriptor);
    // trong descrpitor có chứa 1 đối tượng có chứa thuộc tính value
    // Nhờ cái value thì mói đi decor cho method đc
    descriptor.value = function (a, b) {
        return (a + b) * 12;
    };
}
class Test {
    //Viết phương thức cho class Test
    //tạo function tính tổng
    sum(a, b) {
        return a + b;
    }
    sum2(a, b) {
        return (a + b) * 4;
    }
}
__decorate([
    decorMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "sum", null);
__decorate([
    decorMethod,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], Test.prototype, "sum2", null);
let sum1 = new Test;
console.log(sum1.sum2(1, 4));
