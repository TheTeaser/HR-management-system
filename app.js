'use strict';

let employeeArr = [];


function Employee(employeeID, fullName, department, level, imageURL, salary) {
    this.employeeID = this.generateID();
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = 0;
    employeeArr.push(this);
}

Employee.prototype.salaryCalc = function () {
    var employeeLevel = this.level.toLowerCase();
    switch (employeeLevel) {
        case ("junior"): this.salary = Math.floor(Math.random() * (1001 - 500) + 500);
            break;

        case ("mid-senior"): this.salary = Math.floor(Math.random() * (1501 - 1000) + 1000);
            break;

        case ("senior"): this.salary = Math.floor(Math.random() * (2001 - 1500) + 1500);
            break;

        default: console.log("Please enter a correct level between (Junior, Mid-Senior, Senior) only!");
            break;

    }

    this.netSalary = this.salary - (this.salary * 0.075);
    return this.netSalary
}

// Employee.prototype.render = function () {

// document.write(`${this.fullName} ${this.salary} <br>`)

// }

Employee.prototype.generateID = function () {


    let empID = Math.floor(Math.random() * (10000 - 1000) + 1000);
    return empID
}



Employee.prototype.render = function () {
    const container = document.getElementById('addEmployee');

    const divEle = document.createElement('div');
    container.appendChild(divEle);

    const empImg = document.createElement('img');
    divEle.appendChild(empImg);
    empImg.setAttribute('src', this.imageURL);
    empImg.width = "150";
    empImg.height = "150";

    const empDisc = document.createElement('p');
    divEle.appendChild(empDisc);

    empDisc.textContent = `Name: ${this.fullName}- ID: ${this.generateID()}- Department: ${this.department}`;

    const empExp = document.createElement('p');
    divEle.appendChild(empExp);
    empExp.textContent = `Level: ${this.level} - ${this.salary}`;

}


let addForm = document.getElementById('HR');
addForm.addEventListener('submit', addNewEmp);

// function addNewEmp(event) {
//     event.preventDefault();

//     let eName = event.target.fullName.value;
//     let eDepartment = event.target.department.value;
//     let eLevel = event.target.level.value;
//     let eImg = event.target.imgURL.value;

//     let employee = new Employee(0, eName, eDepartment, eLevel, eImg);
//     employee.salaryCalc();
//     employee.render();

//     //Lab09
//     // console.log(employee);
//     // localStorage.setItem('New employee', employee);
//     let jsonObj = JSON.stringify(employee);
//     localStorage.setItem('New Employee', jsonObj);
//     // console.log(jsonObj);
    
// }
function addNewEmp(event) {
    event.preventDefault();

    let eName = event.target.fullName.value;
    let eDepartment = event.target.department.value;
    let eLevel = event.target.level.value;
    let eImg = event.target.imgURL.value;

    let employee = new Employee(0, eName, eDepartment, eLevel, eImg);
    employee.salaryCalc();
    employee.render();

    let existingData = JSON.parse(localStorage.getItem('New Employee')) || [];
    existingData.push(employee);
    let updatedData = JSON.stringify(existingData);
    localStorage.setItem('New Employee', updatedData);
}

//I have set the items in local storage but now I need to retrieve it and when I retrieve it, then I need to convert it to JS as it will be retrieved in JSON format.

function getJSON() {
    let retrievedData = localStorage.getItem('New Employee');
    console.log(retrievedData);
    let jsObj = JSON.parse(retrievedData);
}
getJSON();

// localStorage.setItem('userName', 'Rakan');

let jsonArray = JSON.stringify(employeeArr);
localStorage.setItem('New Employee', jsonArray);

// Save data to localStorage before the page is unloaded
window.onbeforeunload = function() {
    localStorage.setItem('employeeArr', JSON.stringify(employeeArr));
}

// Retrieve data from localStorage after the page is loaded
window.onload = function() {
    let storedData = localStorage.getItem('employeeArr');
    if (storedData) {
        employeeArr = JSON.parse(storedData);
    }
}






let employee00 = new Employee(1000, "Ghazi Samer", "Adminstration", "Senior", "./assets/male.jpg");
employee00.salaryCalc();
let employee01 = new Employee(1001, "Lana Ali", "Finance", "Senior", "./assets/female.jpg",);
employee01.salaryCalc();
let employee02 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "./assets/female.jpg",);
employee02.salaryCalc();
let employee03 = new Employee(1003, "Safi Walid", "Adminstration", "Mid-Senior", "./assets/male.jpg",);
employee03.salaryCalc();
let employee04 = new Employee(1004, "Omar Zaid", "Development", "Senior", "./assets/male.jpg",);
employee04.salaryCalc();
let employee05 = new Employee(1005, "Rana Saleh", "Development", "Junior", "./assets/female.jpg",);
employee05.salaryCalc();
let employee06 = new Employee(1006, "Hadi Ahmadr", "Finance", "Mid-Senior", "./assets/male.jpg",);
employee06.salaryCalc();

employee00.render();
employee01.render();
employee02.render();
employee03.render();
employee04.render();
employee05.render();
employee06.render();


