"use strict";
function mergePush(arr) {
    let subArr = [];
    function push(arr) {
        for (let item of arr) {
            if (Array.isArray(item)) {
                push(item);
            }
            else {
                subArr.push(item);
            }
        }
    }
    push(arr);
    return subArr;
}
console.log(mergePush([[1, 2], [3, 4, 5], [6], [10, [11, 12], 13], [7, 8, 9]]));
;
