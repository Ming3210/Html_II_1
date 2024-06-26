"use strict";
class Person {
    constructor(id, name, email, phone, gender, address) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.address = address;
    }
}
// class Sts extends Person{
//     grade: number;
//     position:string;
//     constructor(grade:number,position:string,id:number,name:string,email:string,phone:number,gender:string,address:string){
//         super(id,name,email,phone,gender,address);
//         this.grade = grade;
//         this.position = position;
//     }
// }
class StudentManager {
    constructor() {
        let studentData = localStorage.getItem('studentData');
        if (studentData) {
            this.student = JSON.parse(studentData);
        }
        else {
            this.student = [];
        }
    }
    renderStudent() {
        let studentData = localStorage.getItem('studentData');
        if (studentData) {
            this.student = JSON.parse(studentData);
        }
        else {
            this.student = [];
        }
        let tbody = document.getElementById('tbody');
        let element = ``;
        for (let i = 0; i < this.student.length; i++) {
            element += `
        <tr>
            <td>${this.student[i].name}</td>
            <td>${this.student[i].email}</td>
            <td>${this.student[i].phone}</td>
            <td>${this.student[i].gender}</td>
            <td colspan="2">
                 <button onclick="editing(${this.student[i].id})"  class="table-btn">Edit</button>
                 <button onclick="editing(${this.student[i].id})"  class="table-btn">Delete</button>
            </td>
        </tr>
            `;
        }
        tbody.innerHTML = element;
    }
}
let sts1 = new StudentManager();
console.log(sts1.renderStudent());
sts1.renderStudent();
let radioElements = document.getElementsByName("gender");
console.log(1111111, radioElements);
let genderValue = '';
console.log("0000000000", genderValue);
// Lấy dữ liệu của radio
function checkRadio() {
    for (let i = 0; i < radioElements.length; i++) {
        let radioElement = radioElements[i];
        if (radioElement instanceof HTMLInputElement && radioElement.checked == true) {
            genderValue = radioElement.value;
        }
    }
}
// let add = document.getElementById("add")
console.log(sts1.student);
let flag = -1;
function adding() {
    checkRadio();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;
    let gender = genderValue;
    let obj = {
        name: name,
        email: email,
        phone: phone,
        gender: gender,
        address: address
    };
    if (flag !== -1) {
        let data = localStorage.getItem("studentData");
        if (data) {
            var studentData = JSON.parse(data);
            console.log("1111111111", studentData);
        }
        for (let i = 0; i < sts1.student.length; i++) {
            if (sts1.student[i].id === flag) {
                studentData.splice(i, 1, Object.assign(Object.assign({}, obj), { id: flag }));
                localStorage.setItem("studentData", JSON.stringify(studentData));
                document.getElementById("add").innerHTML = "Add";
                flag = -1;
                sts1.renderStudent();
            }
        }
    }
    sts1.student.push({ id: Math.floor(Math.random() * 9999999999999999999), name: name, email: email, phone: phone, gender: gender, address: address });
    sts1.renderStudent();
    localStorage.setItem('studentData', JSON.stringify(sts1.student));
}
document.getElementById("add").addEventListener("click", function (e) {
    e.preventDefault();
});
function editing(id) {
    document.getElementById("add").innerHTML = "Edit";
    for (let i = 0; i < sts1.student.length; i++) {
        if (sts1.student[i].id === id) {
            document.getElementById("name").value = sts1.student[i].name;
            document.getElementById("email").value = sts1.student[i].email;
            let phone = document.getElementById("phone").value;
            phone = sts1.student[i].phone;
            document.getElementById("phone").value = `${phone}`;
            document.getElementById("address").value = sts1.student[i].address;
        }
    }
    flag = id;
}
