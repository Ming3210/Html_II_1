"use strict";
function type(a) {
    if (typeof a === 'number' || typeof a === "string")
        return typeof a;
    else
        return "khong phai kieu du lieu";
}
console.log(type(9));
let number = [];
let number2 = [];
function get(a) {
    if (typeof a === 'number') {
        return [a];
    }
    else if (Array.isArray(a))
        return [a[a.length - 1]];
    else
        return "KP kieu du lieu";
}
let generic3 = (param) => {
    return param;
};
function get1(a) {
    if (Array.isArray(a)) {
        return [a[a.length - 1]];
    }
    else {
        return [a];
    }
}
console.log(get1([3, 4, "hhghghgg"]));
console.log(get1(6));
