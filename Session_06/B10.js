"use strict";
function cal(a, b, c) {
    if (typeof a === "number" && typeof b === "number" && c == "add") {
        return a + b;
    }
    else if (typeof a === "number" && typeof b === "number" && c === "subtract") {
        return a - b;
    }
    else if (typeof a === "number" && typeof b === "number" && c === "multiply") {
        return a * b;
    }
    else if (typeof a === "number" && typeof b === "number" && c === "divide") {
        return a / b;
    }
    else if (typeof a === "string" || typeof b === "string") {
        return "Tham số ko hợp lệ";
    }
}
console.log(cal("6", 4, "add"));
