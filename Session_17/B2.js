"use strict";
function alter(a, num1, num2) {
    let temp = a[num1];
    a[num1] = a[num2];
    a[num2] = temp;
    console.log(typeof temp);
    return a;
}
console.log(alter([1, 2, 3, 4, 5, 6, 7, 8], 2, 4));
