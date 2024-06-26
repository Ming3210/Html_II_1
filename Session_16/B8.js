"use strict";
function merge(obj1, obj2) {
    let obj = {};
    let subObj = {};
    for (let key in obj1) {
        obj = Object.assign(Object.assign({}, obj), { [key]: obj1[key] });
    }
    for (const key in obj2) {
        subObj = Object.assign(Object.assign({}, subObj), { [key]: obj2[key] });
    }
    let mergeObj = Object.assign(Object.assign({}, obj), subObj);
    return mergeObj;
}
let obj1 = {
    a: 1,
    b: {
        c: 2,
        d: [3, 4]
    },
    f: "abc"
};
let obj2 = {
    a: 5,
    b: {
        c: 6,
        d: [7, 8],
        e: {
            f: 9
        },
    },
    g: 10,
    w: "16262",
    f: "def"
};
console.log(merge(obj1, obj2));
