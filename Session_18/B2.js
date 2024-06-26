"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function timingDecorator(target, propertyKey, descriptor) {
    descriptor.value = function (...args) {
        const startTime = performance.now();
        console.log(startTime);
        const endTime = performance.now();
        console.log(endTime);
        descriptor.value.apply(this, args);
        const executionTime = endTime - startTime;
        console.log(`Execution time: ${executionTime} ms`);
        return descriptor.value.apply(this, args);
        ;
    };
}
class CountTime {
    add(a, b) {
        return a + b;
    }
}
__decorate([
    timingDecorator,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Number)
], CountTime.prototype, "add", null);
let result = new CountTime();
console.log(`Result: ${result.add(3, 4)}`);