"use strict";
function checkNumberType(value) {
    if (typeof value === 'number' && !isNaN(value)) {
        if (Number.isInteger(value)) {
            console.log(`${value} là số nguyên.`);
        }
        else {
            console.log(`${value} là số thực.`);
        }
    }
    else {
        console.log(`${value} không phải là số.`);
    }
}
checkNumberType(5);
checkNumberType(3.14);
checkNumberType('hello');
checkNumberType(NaN);
