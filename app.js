'use strict';


function Employee(employeeID, fullName, department, level, imageURL, salary) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department;
    this.level = level;
    this.imageURL = imageURL;
    this.salary = this.salaryCalc();


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
    return this.Salary
}

Employee.prototype.render = function () {

    document.write(`${this.fullName} ${this.salary} <br>`)

}

let employee00 = new Employee(1000, "Ghazi Samer", "Adminstration", "Senior", "");
employee00.salaryCalc();
let employee01 = new Employee(1001, "Lana Ali", "Finance", "Senior", "",);
employee01.salaryCalc();
let employee02 = new Employee(1002, "Tamara Ayoub", "Marketing", "Senior", "",);
employee02.salaryCalc();
let employee03 = new Employee(1003, "Safi Walid", "Adminstration", "Mid-Senior", "",);
employee03.salaryCalc();
let employee04 = new Employee(1004, "Omar Zaid", "Development", "Senior", "",);
employee04.salaryCalc();
let employee05 = new Employee(1005, "Rana Saleh", "Development", "Junior", "",);
employee05.salaryCalc();
let employee06 = new Employee(1006, "Hadi Ahmadr", "Finance", "Mid-Senior", "",);
employee06.salaryCalc();

employee00.render();
employee01.render();
employee02.render();
employee03.render();
employee04.render();
employee05.render();
employee06.render();


