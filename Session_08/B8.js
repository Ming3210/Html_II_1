"use strict";
function combine(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const objA = {
    a: 1
};
const objB = {
    b: 'hello'
};
console.log(combine(objA, objB));
