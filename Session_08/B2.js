"use strict";
function validatePerson(person) {
    if (typeof person.name === "string" && typeof person.age === "number" && typeof person.address === "object") {
        return true;
    }
    else {
        return false;
    }
}
let newObj = {
    name: "Minh",
    age: 18,
    address: {
        street: "123 Street",
        city: "Ho Chi Minh",
        country: "Vietnam"
    }
};
console.log(validatePerson(newObj));
