"use strict";
function input(something) {
    if (typeof something === 'number') {
        return something * something;
    }
    else if (typeof something === 'string') {
        return something.length;
    }
    else if (Array.isArray(something)) {
        return something.length;
    }
    else {
        throw Error('Invalid input type');
    }
}
console.log(input(5));
console.log(input('asdasdaasdassd'));
console.log(input([323, "adasd", 123123]));
