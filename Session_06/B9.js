"use strict";
let str = "banana";
let newStr = str.split("");
for (let i = 0; i < newStr.length; i++) {
    for (let j = i + 1; j < newStr.length; j++) {
        if (newStr[j] == newStr[i]) {
            newStr.splice(j, 1);
            j--;
        }
    }
}
str = newStr.join("");
console.log(str);
